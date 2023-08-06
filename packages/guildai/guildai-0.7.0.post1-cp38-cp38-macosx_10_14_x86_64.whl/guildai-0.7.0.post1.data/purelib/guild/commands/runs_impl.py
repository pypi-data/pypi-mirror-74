# Copyright 2017-2020 TensorHub, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from __future__ import absolute_import
from __future__ import division

import datetime
import errno
import inspect
import json
import logging
import os
import re
import shutil
import signal

import click

import guild.opref

# IMPORTANT: Keep expensive imports out of this list. This module is
# used by several commands and any latency here will be automatically
# applied to those commands. If the import is used once or twice, move
# it into the applicable function(s). If it's used more than once or
# twice, move the command impl into a separate module (see
# publish_impl for example).

from guild import cli
from guild import cmd_impl_support
from guild import config
from guild import flag_util
from guild import op_util
from guild import remote_run_support
from guild import run as runlib
from guild import run_util
from guild import util
from guild import var

from . import remote_impl_support

log = logging.getLogger("guild")

RUN_DETAIL = [
    "id",
    "operation",
    "from",
    "status",
    "started",
    "stopped",
    "marked",
    "label",
    "sourcecode_digest",
    "vcs_commit",
    "run_dir",
    "command",
    "exit_status",
    "pid",
]

ALL_RUNS_ARG = [":"]
LATEST_RUN_ARG = ["1"]

CORE_RUN_ATTRS = [
    "cmd",
    "compare",
    "deps",
    "env",
    "exit_status",
    "exit_status.remote",
    "flags",
    "host",
    "id",
    "initialized",
    "label",
    "marked",
    "objective",
    "op",
    "pip_freeze",
    "platform",
    "random_seed",
    "run_params",
    "sourcecode_digest",
    "started",
    "stopped",
    "user",
    "user_flags",
    "vcs_commit",
]

LEGACY_RUN_ATTRS = [
    "resolved_deps",
    "opdef",
]

RUNS_PER_GROUP = 20

FILTERABLE = [
    "completed",
    "error",
    "pending",
    "running",
    "staged",
    "terminated",
]

STYLE_TABLE_WIDTH_ADJ = 8


def runs_for_args(args, force_deleted=False, ctx=None):
    filtered = filtered_runs(args, force_deleted, ctx)
    return select_runs(filtered, args.runs, ctx)


def filtered_runs(args, force_deleted=False, ctx=None):
    return var.runs(
        _runs_root_for_args(args, force_deleted),
        sort=["-timestamp"],
        filter=_runs_filter(args, ctx),
    )


def _runs_root_for_args(args, force_deleted):
    archive = getattr(args, "archive", None)
    if archive:
        return archive
    deleted = force_deleted or getattr(args, "deleted", False)
    return var.runs_dir(deleted=deleted)


def _runs_filter(args, ctx):
    filters = []
    _apply_status_filter(args, filters)
    _apply_ops_filter(args, filters)
    _apply_labels_filter(args, filters)
    _apply_marked_filter(args, filters)
    _apply_started_filter(args, ctx, filters)
    _apply_sourcecode_digest_filter(args, filters)
    return var.run_filter("all", filters)


def _apply_status_filter(args, filters):
    status_filters = [
        var.run_filter("attr", "status", status)
        for status in FILTERABLE
        if getattr(args, status, False)
    ]
    if status_filters:
        filters.append(var.run_filter("any", status_filters))


def _apply_ops_filter(args, filters):
    if args.ops:
        filters.append(_op_run_filter(args.ops))


def _op_run_filter(op_refs):
    def f(run):
        op = run_util.format_operation(run, nowarn=True)
        pkg = run_util.format_pkg_name(run)
        full_op = "%s/%s" % (pkg, op)
        return any((ref in full_op for ref in op_refs))

    return f


def _apply_labels_filter(args, filters):
    if args.labels and args.unlabeled:
        cli.error("--label and --unlabeled cannot both be used")
    if args.labels:
        filters.append(_labels_filter(args.labels))
    elif args.unlabeled:
        filters.append(_unlabeled_filter())


def _labels_filter(labels):
    def f(run):
        run_label = str(run.get("label", ""))
        return any((l in run_label for l in labels))

    return f


def _unlabeled_filter():
    def f(run):
        return not run.get("label", "").strip()

    return f


def _apply_marked_filter(args, filters):
    if args.marked and args.unmarked:
        cli.error("--marked and --unmarked cannot both be used")
    if args.marked:
        filters.append(_marked_filter())
    if args.unmarked:
        filters.append(_marked_filter(False))


def _marked_filter(test_for=True):
    def f(run):
        marked = bool(run.get("marked"))
        return marked if test_for is True else not marked

    return f


def _apply_started_filter(args, ctx, filters):
    if args.started:
        start, end = _parse_timerange(args.started, ctx)
        log.debug("time range filter: %s to %s", start, end)
        filters.append(_started_filter(start, end))


def _parse_timerange(spec, ctx):
    from guild import timerange

    try:
        return timerange.parse_spec(spec)
    except ValueError as e:
        cli.error("invalid RANGE: %s%s" % (e, _range_help_suffix(ctx)))


def _apply_sourcecode_digest_filter(args, filters):
    if args.digest:
        filters.append(_digest_filter(args.digest))


def _digest_filter(prefix):
    def f(run):
        return run.get("sourcecode_digest", "").startswith(prefix)

    return f


def _range_help_suffix(ctx):
    if not ctx:
        return ""
    return "\nTry '%s --help' for help specifying time ranges." % ctx.command_path


def _started_filter(start, end):
    def f(run):
        started = run.timestamp
        if not started:
            log.debug("%s no timestamp, skipping", run.id)
            return False
        started = datetime.datetime.fromtimestamp(started // 1000000)
        if start and started < start:
            log.debug("%s timestamp %s < %s, skipping", run.id, started, start)
            return False
        if end and started >= end:
            log.debug("%s timestamp %s >= %s, skipping", run.id, started, start)
            return False
        log.debug("%s timestamp %s in range", run.id, started)
        return True

    return f


def select_runs(runs, select_specs, ctx=None):
    if not select_specs:
        return runs
    selected = []
    for spec in select_specs:
        try:
            slice_start, slice_end = _parse_slice(spec)
        except ValueError:
            selected.append(_find_run_by_id(spec, runs, ctx))
        else:
            if _in_range(slice_start, slice_end, runs):
                selected.extend(runs[slice_start:slice_end])
            else:
                selected.append(_find_run_by_id(spec, runs, ctx))
    return selected


def _parse_slice(spec):
    try:
        index = int(spec)
    except ValueError:
        m = re.match("(\\d+)?:(\\d+)?", spec)
        if m:
            try:
                return (_slice_part(m.group(1), decr=True), _slice_part(m.group(2)))
            except ValueError:
                pass
        raise ValueError(spec)
    else:
        return index - 1, index


def _slice_part(s, decr=False):
    if s is None:
        return None
    elif decr:
        return int(s) - 1
    else:
        return int(s)


def _find_run_by_id(id_part, runs, ctx):
    matches = [run for run in runs if run.id.startswith(id_part)]
    return cmd_impl_support.one_run(matches, id_part, ctx)


def _in_range(slice_start, slice_end, l):
    return (slice_start is None or slice_start >= 0) and (
        slice_end is None or slice_end <= len(l)
    )


def list_runs(args, ctx=None):
    if args.remote:
        remote_impl_support.list_runs(args)
    else:
        _list_runs(args, ctx)


def _list_runs(args, ctx):
    if args.archive and args.deleted:
        cli.error("--archive and --deleted may not both be used")
    if args.archive and not os.path.exists(args.archive):
        cli.error("%s does not exist" % args.archive)
    runs = filtered_runs(args, ctx=ctx)
    if args.json:
        if args.limit or args.more or args.all:
            cli.note("--json option always shows all runs")
        _list_runs_json(runs)
    else:
        _list_formatted_runs(runs, args)


def _list_runs_json(runs):
    runs_data = [_listed_run_json_data(run) for run in runs]
    cli.out(json.dumps(runs_data))


def _listed_run_json_data(run):
    run_data = _run_data(
        run, ("exit_status", "cmd", "marked", "label", "started", "status", "stopped",)
    )
    _apply_batch_proto(run, run_data)
    return run_data


def _run_data(run, attrs):
    data = {
        "id": run.id,
        "run_dir": run.path,
        "opref": str(run.opref) if run.opref else "",
    }
    data.update({name: _run_attr(run, name) for name in attrs})
    return data


def _run_attr(run, name):
    base_attrs = ("status",)
    if name in base_attrs:
        return getattr(run, name)
    else:
        return run.get(name)


def _apply_batch_proto(run, data):
    proto_dir = run.guild_path("proto")
    if os.path.exists(proto_dir):
        proto = runlib.for_dir(proto_dir)
        data["batch_proto"] = _listed_run_json_data(proto)


def _list_formatted_runs(runs, args):
    formatted = format_runs(_limit_runs(runs, args))
    cols = [
        "index",
        "op_desc",
        "started",
        "status_with_remote",
        "label",
    ]
    detail = RUN_DETAIL if args.verbose else None
    cli.table(formatted, cols=cols, detail=detail, max_width_adj=STYLE_TABLE_WIDTH_ADJ)


def _limit_runs(runs, args):
    if args.all:
        if args.limit is not None:
            cli.error("--all and --limit cannot both be used")
        return runs
    if args.limit and args.limit > 0:
        return runs[: args.limit]
    limited = runs[: (args.more + 1) * RUNS_PER_GROUP]
    if len(limited) < len(runs):
        cli.note(
            "Showing the first %i runs (%i total) - use --all "
            "to show all or -m to show more" % (len(limited), len(runs))
        )
    return limited


def format_runs(runs):
    formatted = []
    for i, run in enumerate(runs):
        try:
            formatted_run = run_util.format_run(run, i + 1)
        except Exception:
            log.exception("formatting run in %s", run.path)
        else:
            formatted.append(formatted_run)
    _apply_op_desc(formatted)
    return formatted


def _apply_op_desc(formatted):
    for fmt_run in formatted:
        op_desc = _op_desc_base(fmt_run)
        marked_suffix = " [marked]" if fmt_run["marked"] == "yes" else ""
        fmt_run["op_desc"] = op_desc + marked_suffix


def _op_desc_base(fmt_run, apply_style=True):
    op = fmt_run["operation"]
    op_dir = _run_op_dir(fmt_run["_run"])
    if not op_dir:
        return _empty_style(op, apply_style)
    return "%s%s" % (op, _styled_op_dir_suffix(op_dir, apply_style))


def _run_op_dir(run):
    run = run.batch_proto or run
    opref = run.opref
    if opref.pkg_type == "guildfile":
        return os.path.dirname(opref.pkg_name)
    elif opref.pkg_type == "script":
        return opref.pkg_name
    else:
        return None


def _empty_style(s, apply_style):
    # Pad a string with an empty style for alignment in tables.
    if apply_style:
        return s + click.style("", dim=True)
    return s


def _styled_op_dir_suffix(op_dir, apply_style):
    cwd = os.path.abspath(config.cwd())
    if util.compare_paths(op_dir, cwd):
        return _empty_style("", apply_style)
    shortened_op_dir = run_util.shorten_op_dir(op_dir, cwd)
    return _dim_style(" (%s)" % shortened_op_dir, apply_style)


def _dim_style(s, apply_style):
    if apply_style:
        return click.style(s, dim=True)
    return s


def format_run(run):
    formatted = format_runs([run])
    if not formatted:
        raise ValueError("error formatting %s" % run)
    assert len(formatted) == 1, formatted
    return formatted[0]


def _no_selected_runs_exit(help_msg=None):
    help_msg = (
        help_msg or "No matching runs\n" "Try 'guild runs list' to list available runs."
    )
    cli.out(help_msg, err=True)
    raise SystemExit(0)


def runs_op(
    args,
    ctx,
    force_deleted,
    preview_msg,
    confirm_prompt,
    no_runs_help,
    op_callback,
    default_runs_arg=None,
    confirm_default=False,
    runs_callback=None,
):
    get_selected = runs_callback or runs_op_selected
    selected = get_selected(args, ctx, default_runs_arg, force_deleted)
    if not selected:
        _no_selected_runs_exit(no_runs_help)
    formatted = None  # expensive, lazily init as needed
    if not args.yes:
        formatted = formatted = format_runs(selected)
        cli.out(preview_msg)
        cols = [
            "short_index",
            "op_desc",
            "started",
            "status_with_remote",
            "label",
        ]
        cli.table(formatted, cols=cols, indent=2)
    fmt_confirm_prompt = confirm_prompt.format(count=len(selected))
    if args.yes or cli.confirm(fmt_confirm_prompt, confirm_default):
        # pylint: disable=deprecated-method
        if len(inspect.getargspec(op_callback).args) == 2:
            formatted = formatted = format_runs(selected)
            op_callback(selected, formatted)
        else:
            op_callback(selected)


def runs_op_selected(args, ctx, default_runs_arg, force_deleted):
    default_runs_arg = default_runs_arg or ALL_RUNS_ARG
    runs_arg = _remove_duplicates(args.runs or default_runs_arg)
    filtered = filtered_runs(args, force_deleted, ctx)
    return select_runs(filtered, runs_arg, ctx)


def _remove_duplicates(vals):
    deduped = []
    for val in vals:
        if val not in deduped:
            deduped.append(val)
    return deduped


def delete_runs(args, ctx=None):
    if args.remote:
        remote_impl_support.delete_runs(args)
    else:
        _delete_runs(args, ctx)


def _delete_runs(args, ctx):
    if args.permanent:
        preview = "WARNING: You are about to permanently delete " "the following runs:"
        confirm = "Permanently delete {count} run(s)?"
    else:
        preview = "You are about to delete the following runs:"
        confirm = "Delete {count} run(s)?"
    no_runs_help = "Nothing to delete."

    def delete(selected):
        stoppable = [
            run for run in selected if run.status == "running" and not run.remote
        ]
        if stoppable and not args.yes:
            cli.out(
                "WARNING: one or more runs are still running "
                "and will be stopped before being deleted."
            )
            if not cli.confirm("Really delete these runs?"):
                return
        for run in stoppable:
            _stop_run(run, no_wait=True)
        var.delete_runs(selected, args.permanent)
        if args.permanent:
            cli.out("Permanently deleted %i run(s)" % len(selected))
        else:
            cli.out("Deleted %i run(s)" % len(selected))

    runs_op(
        args,
        ctx,
        False,
        preview,
        confirm,
        no_runs_help,
        delete,
        confirm_default=not args.permanent,
    )


def purge_runs(args, ctx):
    if args.remote:
        remote_impl_support.purge_runs(args)
    else:
        _purge_runs(args, ctx)


def _purge_runs(args, ctx):
    preview = "WARNING: You are about to permanently delete " "the following runs:"
    confirm = "Permanently delete {count} run(s)?"
    no_runs_help = "Nothing to purge."

    def purge(selected):
        var.purge_runs(selected)
        cli.out("Permanently deleted %i run(s)" % len(selected))

    runs_op(args, ctx, True, preview, confirm, no_runs_help, purge)


def restore_runs(args, ctx):
    if args.remote:
        remote_impl_support.restore_runs(args)
    else:
        _restore_runs(args, ctx)


def _restore_runs(args, ctx):
    preview = "You are about to restore the following runs:"
    confirm = "Restore {count} run(s)?"
    no_runs_help = "Nothing to restore."

    def restore(selected):
        var.restore_runs(selected)
        cli.out("Restored %i run(s)" % len(selected))

    runs_op(
        args, ctx, True, preview, confirm, no_runs_help, restore, confirm_default=True
    )


def run_info(args, ctx):
    if args.remote:
        remote_impl_support.run_info(args)
    else:
        _run_info(args, ctx)


def _run_info(args, ctx):
    run = one_run(args, ctx)
    _print_run_info(run, args)


def one_run(args, ctx):
    filtered = filtered_runs(args, ctx=ctx)
    if not filtered:
        cli.error("no matching runs")
    runspec = args.run or "1"
    selected = select_runs(filtered, [runspec], ctx)
    return cmd_impl_support.one_run(selected, runspec, ctx)


def _print_run_info(run, args):
    data = _run_info_data(run, args)
    if args.json:
        _print_run_info_json(data)
    else:
        _print_run_info_ordered(data)


def _run_info_data(run, args):
    data = []
    _append_attr_data(run, args.private_attrs, data)
    data.append(("flags", run.get("flags") or {}))
    proto = run.batch_proto
    if proto:
        data.append(("proto-flags", proto.get("flags") or {}))
    data.append(("scalars", _scalar_info(run, args)))
    if args.env:
        data.append(("environment", run.get("env") or {}))
    if args.deps:
        data.append(("dependencies", run.get("deps") or {}))
    if args.private_attrs and args.json:
        _maybe_append_proto_data(run, data)
    return data


def _append_attr_data(run, include_private, data):
    fmt_run = format_run(run)
    for name in RUN_DETAIL:
        data.append((name, fmt_run[name]))
    for name in other_attr_names(run, include_private):
        data.append((name, run_util.format_attr(run.get(name))))
    if include_private:
        data.append(("opref", str(run.opref)))
        data.append(("op", run.get("op")))


def other_attr_names(run, include_private=False):
    core_attrs = CORE_RUN_ATTRS + LEGACY_RUN_ATTRS
    if include_private:
        include = lambda x: x not in core_attrs
    else:
        include = lambda x: x[0] != "_" and x not in core_attrs
    return [name for name in sorted(run.attr_names()) if include(name)]


def _scalar_info(run, args):
    return {
        key: val
        for key, val in _iter_scalars(run, args)
        if args.all_scalars or filter_default_scalar(key)
    }


def filter_default_scalar(key):
    _prefix, tag = _split_scalar_key(key)
    return not tag.startswith("sys/")


def _split_scalar_key(key):
    parts = key.split("#", 1)
    return ("", parts[0]) if len(parts) == 1 else (parts[0], parts[1])


def _iter_scalars(run, args):
    from guild import index as indexlib  # expensive

    for s in indexlib.iter_run_scalars(run):
        key = _s_key(s)
        val = _s_val(s)
        step = _s_step(s)
        if args.json:
            yield key, (val, step)
        else:
            yield key, "%f (step %i)" % (_s_val(s), _s_step(s))


def _s_key(s):
    return run_util.run_scalar_key(s)


def _s_val(s):
    return s["last_val"]


def _s_step(s):
    return s["last_step"]


def _res_sources_paths(sources):
    paths = []
    for source_paths in sources.values():
        paths.extend(source_paths)
    return sorted(paths)


def _maybe_append_proto_data(run, data):
    proto = run.batch_proto
    if proto:
        proto_data = []
        _append_attr_data(proto, True, proto_data)
        data.append(("proto-run", proto_data))


def _print_run_info_json(data):
    data = _tuple_lists_to_dict(data)
    cli.out(json.dumps(data))


def _tuple_lists_to_dict(data):
    if isinstance(data, list):
        if data and isinstance(data[0], tuple):
            return {name: _tuple_lists_to_dict(val) for name, val in data}
        else:
            return [_tuple_lists_to_dict(val) for val in data]
    else:
        return data


def _print_run_info_ordered(data):
    # Use consistent formatting across flags and run info output.
    encode_val = flag_util.encode_flag_val
    for name, val in data:
        if isinstance(val, list):
            cli.out("%s:" % name)
            for item in val:
                cli.out("  - %s" % encode_val(item))
        elif isinstance(val, dict):
            cli.out("%s:" % name)
            for item_name, item_val in _sort_run_info_attr(name, val):
                if isinstance(item_val, list):
                    cli.out("  %s:" % item_name)
                    for item_item in item_val:
                        cli.out("    - %s" % encode_val(item_item))
                elif isinstance(item_val, dict):
                    cli.out("  %s:" % item_name)
                    # Use full YAML formatting for config blocks.
                    cli.out(_indent(util.encode_yaml(item_val), 4))
                else:
                    cli.out("  %s: %s" % (item_name, encode_val(item_val)))
        else:
            cli.out("%s: %s" % (name, val))


def _sort_run_info_attr(name, val):
    if name == "scalars":
        return _sort_run_info_scalars(val)
    else:
        return sorted(val.items())


def _sort_run_info_scalars(val):
    key = lambda item: _split_scalar_key(item[0])
    return sorted(val.items(), key=key)


def _indent(s, spaces):
    prefix = " " * spaces
    return "\n".join(["%s%s" % (prefix, line) for line in s.split("\n")])


def label(args, ctx):
    _check_label_args(args, ctx)
    if args.remote:
        remote_impl_support.label_runs(args)
    else:
        _set_labels(args, ctx)


def _check_label_args(args, ctx):
    cmd_impl_support.check_required_args(
        ["set", "append", "prepend", "remove", "clear",], args, ctx
    )
    cmd_impl_support.check_incompatible_args(
        [
            ("set", "append"),
            ("set", "prepend"),
            ("set", "remove"),
            ("set", "clear"),
            ("append", "prepend"),
            ("append", "clear"),
            ("append", "remove"),
            ("prepend", "clear"),
            ("prepend", "remove"),
        ],
        args,
        ctx,
    )


def _set_labels(args, ctx):
    preview = _set_labels_preview(args)
    confirm = "Continue?"
    no_runs = "No runs to modify."

    def set_labels(selected):
        for run in selected:
            if args.clear:
                run.del_attr("label")
            else:
                run.write_attr("label", _label_for_run(run, args).strip())
        if args.clear:
            cli.out("Cleared label for %i run(s)" % len(selected))
        else:
            cli.out("Labeled %i run(s)" % len(selected))

    runs_op(
        args, ctx, False, preview, confirm, no_runs, set_labels, LATEST_RUN_ARG, True
    )


def _set_labels_preview(args):
    if args.set:
        return "You are about to label the following runs with '%s':" % args.set
    elif args.prepend:
        return (
            "You are about to prepend '%s' to the label of the following runs:"
            % args.prepend
        )
    elif args.append:
        return (
            "You are about to append '%s' to the label of the following runs:"
            % args.append
        )
    elif args.remove:
        return (
            "You are about to remove '%s' from the label of the following runs:"
            % args.remove
        )
    elif args.clear:
        return "You are about to clear the label of the following runs:"
    else:
        assert False, args


def _label_for_run(run, args):
    if args.set:
        return format_run_label(args.set, run)
    elif args.prepend:
        return "%s %s" % (format_run_label(args.prepend, run), _run_label(run))
    elif args.append:
        return "%s %s" % (_run_label(run), format_run_label(args.append, run))
    elif args.remove:
        return _remove_label_parts(args.remove, _run_label(run))


def format_run_label(template, run):
    fmt_params = run.get("flags") or {}
    fmt_params["label"] = _run_label(run)
    return op_util.run_label(template, fmt_params).strip()


def _run_label(run):
    return run.get("label") or ""


def _remove_label_parts(parts, label):
    for part in parts:
        label = _remove_label_part(part, label)
    return label


def _remove_label_part(part, label):
    try:
        split_parts = re.split(r"(^|\s)%s($|\s)" % part, label)
    except Exception as e:
        cli.error("cannot remove label part %r: %s" % e)
    else:
        return " ".join([s for s in [t.strip() for t in split_parts] if s])


def stop_runs(args, ctx):
    if args.remote:
        remote_impl_support.stop_runs(args)
    else:
        _stop_runs(args, ctx)


def _stop_runs(args, ctx):
    preview = "WARNING: You are about to stop the following runs:"
    confirm = "Stop {count} run(s)?"
    no_runs_help = "Nothing to stop."
    args.running = True

    def stop_f(selected):
        for run in selected:
            _stop_run(run, args.no_wait)

    def select_runs_f(args, ctx, default_runs_arg, force_deleted):
        runs = runs_op_selected(args, ctx, default_runs_arg, force_deleted)
        return [run for run in runs if not run.remote]

    runs_op(
        args,
        ctx,
        False,
        preview,
        confirm,
        no_runs_help,
        stop_f,
        None,
        False,
        select_runs_f,
    )


def _stop_run(run, no_wait):
    remote_lock = remote_run_support.lock_for_run(run)
    if remote_lock:
        _try_stop_remote_run(run, remote_lock, no_wait)
    else:
        _try_stop_local_run(run)


def _try_stop_remote_run(run, remote_lock, no_wait):
    try:
        plugin = guild.plugin.for_name(remote_lock.plugin_name)
    except LookupError:
        log.warning(
            "error syncing run '%s': plugin '%s' not available",
            run.id,
            remote_lock.plugin_name,
        )
    else:
        cli.out("Stopping %s (remote)" % run.id)
        plugin.stop_run(run, dict(no_wait=no_wait))


def _try_stop_local_run(run):
    pid = run.pid
    if pid and util.pid_exists(pid):
        cli.out("Stopping %s (pid %i)" % (run.id, run.pid))
        os.kill(pid, signal.SIGTERM)


def export(args, ctx):
    preview = "You are about to %s the following runs to '%s':" % (
        args.move and "move" or "copy",
        args.location,
    )
    confirm = "Continue?"
    no_runs = "No runs to export."

    def export(selected):
        if args.copy_resources and not args.yes:
            cli.out(
                "WARNING: you have specified --copy-resources, which will "
                "copy resources used by each run!"
                ""
            )
            if not cli.confirm("Really copy resources exported runs?"):
                return
        _init_export_dir(args.location)
        exported = 0
        for run in selected:
            dest = os.path.join(args.location, run.id)
            if os.path.exists(dest):
                log.warning("%s exists, skipping", dest)
                continue
            if args.move:
                cli.out("Moving {}".format(run.id))
                if args.copy_resources:
                    shutil.copytree(run.path, dest)
                    shutil.rmtree(run.path)
                else:
                    shutil.move(run.path, dest)
            else:
                cli.out("Copying {}".format(run.id))
                symlinks = not args.copy_resources
                shutil.copytree(run.path, dest, symlinks)
            exported += 1
        cli.out("Exported %i run(s)" % exported)

    runs_op(args, ctx, False, preview, confirm, no_runs, export, ALL_RUNS_ARG, True)


def _init_export_dir(dir):
    util.ensure_dir(dir)
    try:
        util.touch(os.path.join(dir, ".guild-nocopy"))
    except IOError as e:
        if e.errno == errno.ENOTDIR:
            cli.error("'%s' is not a directory" % dir)
        else:
            cli.error("error initializing export directory '%s': %s" % (dir, e))


def import_(args, ctx):
    if not os.path.exists(args.archive):
        cli.error("archive '%s' does not exist" % args.archive)
    if not os.path.isdir(args.archive):
        cli.error("invalid archive '%s' - expected a directory" % args.archive)
    preview = "You are about to import (%s) the following runs from '%s':" % (
        args.move and "move" or "copy",
        args.archive,
    )
    confirm = "Continue?"
    no_runs = "No runs to import."

    def export(selected):
        if args.copy_resources and not args.yes:
            cli.out(
                "WARNING: you have specified --copy-resources, which will "
                "copy resources used by each run!"
            )
            if not cli.confirm("Really copy resources exported runs?"):
                return
        imported = 0
        for run in selected:
            dest = os.path.join(var.runs_dir(), run.id)
            if os.path.exists(dest):
                log.warning("%s exists, skipping", run.id)
                continue
            if args.move:
                cli.out("Moving {}".format(run.id))
                if args.copy_resources:
                    shutil.copytree(run.path, dest)
                    shutil.rmtree(run.path)
                else:
                    shutil.move(run.path, dest)
            else:
                cli.out("Copying {}".format(run.id))
                symlinks = not args.copy_resources
                shutil.copytree(run.path, dest, symlinks)
            imported += 1
        cli.out("Imported %i run(s)" % imported)

    runs_op(args, ctx, False, preview, confirm, no_runs, export, ALL_RUNS_ARG, True)


def push(args, ctx):
    preview = "You are about to copy (push%s) the following runs to %s:" % (
        _delete_clause(args),
        args.remote,
    )
    confirm = "Continue?"
    no_runs = "No runs to copy."

    def push_f(runs):
        remote_impl_support.push_runs(runs, args)

    runs_op(args, ctx, False, preview, confirm, no_runs, push_f, ALL_RUNS_ARG, True)


def _delete_clause(args):
    if args.delete:
        return " with delete"
    else:
        return ""


def pull(args, ctx):
    preview = "You are about to copy (pull%s) the following runs from %s:" % (
        _delete_clause(args),
        args.remote,
    )
    confirm = "Continue?"
    no_runs = "No runs to copy."

    def pull_f(runs):
        remote_impl_support.pull_runs(runs, args)

    def filtered_runs_f(args, _ctx, _default_runs_arg, _force_deleted):
        filtered = remote_impl_support.filtered_runs(args)
        return select_runs(filtered, args.runs, ctx)

    runs_op(
        args,
        ctx,
        False,
        preview,
        confirm,
        no_runs,
        pull_f,
        ALL_RUNS_ARG,
        True,
        filtered_runs_f,
    )


def mark(args, ctx=None):
    if args.clear:
        _clear_marked(args, ctx)
    else:
        _mark(args, ctx)


def _clear_marked(args, ctx):
    preview = "You are about to unmark the following runs:"
    confirm = "Continue?"
    no_runs = "No runs to unmark."

    def clear(selected):
        for run in selected:
            run.del_attr("marked")
        cli.out("Unmarked %i run(s)" % len(selected))

    if not args.runs:
        args.marked = True
    runs_op(args, ctx, False, preview, confirm, no_runs, clear, ALL_RUNS_ARG, True)


def _mark(args, ctx):
    preview = "You are about to mark the following runs:"
    confirm = "Continue?"
    no_runs = "No runs to mark."

    def mark(selected):
        for run in selected:
            run.write_attr("marked", True)
        cli.out("Marked %i run(s)" % len(selected))

    if not args.runs:
        args.marked = True
    runs_op(args, ctx, False, preview, confirm, no_runs, mark, LATEST_RUN_ARG, True)


def select(args, ctx):
    run = select_run(args, ctx)
    if args.short:
        print(run.short_id)
    else:
        print(run.id)


def select_run(args, ctx=None):
    _check_select_args(args, ctx)
    if args.min:
        return _select_min_run(args, ctx, args.min)
    elif args.max:
        return _select_min_run(args, ctx, args.max, reverse=True)
    else:
        return one_run(args, ctx)


def _check_select_args(args, ctx):
    cmd_impl_support.check_incompatible_args([("min", "max"),], args, ctx)


def _select_min_run(args, ctx, scalar, reverse=False):
    runs = _select_runs(args, ctx)
    assert runs
    return _sort_selected_runs(runs, scalar, reverse)[0]


def _select_runs(args, ctx):
    args.runs = [args.run] if args.run else []
    return runs_for_args(args, ctx=ctx)


def _sort_selected_runs(runs, scalar, reverse):
    from guild import index as indexlib  # expensive

    run_scalar_args = _run_scalar_args_for_select(scalar)
    index = indexlib.RunIndex()
    index.refresh(runs, ["scalar"])
    factor = -1 if reverse else 1
    inf = float('inf')

    def key(run):
        scalar = index.run_scalar(run, *run_scalar_args)
        if scalar is None:
            return inf
        return factor * scalar

    return sorted(runs, key=key)


def _run_scalar_args_for_select(scalar_spec):
    from guild import query

    try:
        cols = query.parse_colspec(scalar_spec).cols
    except query.ParseError as e:
        cli.error("invalid scalar '%s': %s" % (scalar_spec, e))
    else:
        assert cols, scalar_spec
        if len(cols) > 1:
            cli.error(
                "invalid scalar '%s': multiple scalars not supported" % scalar_spec
            )
        col = cols[0]
        # 'header', 'key', 'named_as', 'qualifier', 'split_key', 'step'
        if col.named_as:
            log.warning("ignoring 'as %s' in scalar", col.named_as)
        prefix, tag = col.split_key()
        return prefix, tag, col.qualifier, col.step
