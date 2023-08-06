Assorted context managers.

*Latest release 20200725.1*:
Docstring improvements.

## Function `popattrs(o, attr_names, old_values)`

The "pop" part of `stackattrs`.
Restore previous attributes of `o`
named by `attr_names` with previous state in `old_values`.

This can be useful in hooks/signals/callbacks,
where you cannot inline a context manager.

## Function `popkeys(d, key_names, old_values)`

The "pop" part of `stackkeys`.
Restore previous key values of `d`
named by `key_names` with previous state in `old_values`.

This can be useful in hooks/signals/callbacks,
where you cannot inline a context manager.

## Function `pushattrs(o, **attr_values)`

The "push" part of `stackattrs`.
Push `attr_values` onto `o` as attributes,
return the previous attribute values in a dict.

This can be useful in hooks/signals/callbacks,
where you cannot inline a context manager.

## Function `pushkeys(d, **key_values)`

The "push" part of `stackkeys`.
Push `key_values` onto `d` as key values.
return the previous key values in a dict.

This can be useful in hooks/signals/callbacks,
where you cannot inline a context manager.

## Function `stackattrs(o, **attr_values)`

Context manager to push new values for the attributes of `o`
and to restore them afterward.
Returns a `dict` containing a mapping of the previous attribute values.
Attributes not present are not present in the mapping.

Restoration includes deleting attributes which were not present
initially.

This makes it easy to adjust temporarily some shared context object
without having to pass it through the call stack.

See `stackkeys` for a flavour of this for mappings.

Example of fiddling a programme's "verbose" mode:

    >>> class RunModes:
    ...     def __init__(self, verbose=False):
    ...         self.verbose = verbose
    ...
    >>> runmode = RunModes()
    >>> if runmode.verbose:
    ...     print("suppressed message")
    ...
    >>> with stackattrs(runmode, verbose=True):
    ...     if runmode.verbose:
    ...         print("revealed message")
    ...
    revealed message
    >>> if runmode.verbose:
    ...     print("another suppressed message")
    ...

Example exhibiting restoration of absent attributes:

    >>> class O:
    ...     def __init__(self):
    ...         self.a = 1
    ...
    >>> o = O()
    >>> print(o.a)
    1
    >>> print(o.b)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'O' object has no attribute 'b'
    >>> with stackattrs(o, a=3, b=4):
    ...     print(o.a)
    ...     print(o.b)
    ...     o.b = 5
    ...     print(o.b)
    ...     delattr(o, 'a')
    ...
    3
    4
    5
    >>> print(o.a)
    1
    >>> print(o.b)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    AttributeError: 'O' object has no attribute 'b'

## Function `stackkeys(d, **key_values)`

Context manager to push new values for the key values of `d`
and to restore them afterward.
Returns a `dict` containing a mapping of the previous key values.
Keys not present are not present in the mapping.

Restoration includes deleting key values which were not present
initially.

This makes it easy to adjust temporarily some shared context object
without having to pass it through the call stack.

See `stackattrs` for a flavour of this for object attributes.

Example of making log entries which may reference
some higher level context log entry:

    >>> import time
    >>> global_context = {
    ...     'parent': None,
    ... }
    >>> def log_entry(desc, **kw):
    ...     print("log_entry: global_context =", repr(global_context))
    ...     entry = dict(global_context)
    ...     entry.update(desc=desc, when=time.time())
    ...     entry.update(kw)
    ...     return entry
    ...
    >>> log_entry("stand alone entry")    #doctest: +ELLIPSIS
    log_entry: global_context = {'parent': None}
    {'parent': None, 'desc': 'stand alone entry', 'when': ...}
    >>> context_entry = log_entry("high level entry")
    log_entry: global_context = {'parent': None}
    >>> context_entry                     #doctest: +ELLIPSIS
    {'parent': None, 'desc': 'high level entry', 'when': ...}
    >>> with stackkeys(global_context, parent=context_entry): #doctest: +ELLIPSIS
    ...     print(repr(log_entry("low level event")))
    ...
    log_entry: global_context = {'parent': {'parent': None, 'desc': 'high level entry', 'when': ...}}
    {'parent': {'parent': None, 'desc': 'high level entry', 'when': ...}, 'desc': 'low level event', 'when': ...}
    >>> log_entry("another standalone entry")    #doctest: +ELLIPSIS
    log_entry: global_context = {'parent': None}
    {'parent': None, 'desc': 'another standalone entry', 'when': ...}

# Release Log



*Release 20200725.1*:
Docstring improvements.

*Release 20200725*:
New stackkeys and components pushkeys and popkeys doing "stackattrs for dicts/mappings".

*Release 20200517*:
* Add `nullcontext` like the one from recent contextlib.
* stackattrs: expose the push and pop parts as pushattrs() and popattrs().

*Release 20200228.1*:
Initial release with stackattrs context manager.
