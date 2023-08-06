A progress tracker with methods for throughput, ETA and update notification;
also a compound progress meter composed from other progress meters.

*Latest release 20200718.3*:
BaseProgress.bar, progressbar: new optional report_print parameter for reporting on completion.

## Class `BaseProgress`

The base class for `Progress` and `OverProcess`
with various common methods.

Note that durations are in seconds
and that absolute time is in seconds since the UNIX epoch
(the basis of `time.time()`).

### Method `BaseProgress.__init__(self, name=None, start_time=None, units_scale=None)`

Initialise a progress instance.

Parameters:
* `name`: optional name
* `start_time`: optional UNIX epoch start time, default from `time.time()`
* `units_scale`: a scale for use with `cs.units.transcribe`,
  default `BINARY_BYTES_SCALE`

## Class `CheckPoint(builtins.tuple)`

CheckPoint(time, position)

## Class `OverProgress(BaseProgress)`

A `Progress`-like class computed from a set of subsidiary `Progress`es.

Example:

    >>> P = OverProgress(name="over")
    >>> P1 = Progress(name="progress1", position=12)
    >>> P1.total = 100
    >>> P1.advance(7)
    >>> P2 = Progress(name="progress2", position=20)
    >>> P2.total = 50
    >>> P2.advance(9)
    >>> P.add(P1)
    >>> P.add(P2)
    >>> P1.total
    100
    >>> P2.total
    50
    >>> P.total
    150
    >>> P1.start
    12
    >>> P2.start
    20
    >>> P.start
    0
    >>> P1.position
    19
    >>> P2.position
    29
    >>> P.position
    16

## Class `Progress(BaseProgress)`

A progress counter to track task completion with various utility methods.

Example:

    >>> P = Progress(name="example")
    >>> P                         #doctest: +ELLIPSIS
    Progress(name='example',start=0,position=0,start_time=...,throughput_window=None,total=None):[CheckPoint(time=..., position=0)]
    >>> P.advance(5)
    >>> P                         #doctest: +ELLIPSIS
    Progress(name='example',start=0,position=5,start_time=...,throughput_window=None,total=None):[CheckPoint(time=..., position=0), CheckPoint(time=..., position=5)]
    >>> P.total = 100
    >>> P                         #doctest: +ELLIPSIS
    Progress(name='example',start=0,position=5,start_time=...,throughput_window=None,total=100):[CheckPoint(time=..., position=0), CheckPoint(time=..., position=5)]

A Progress instance has an attribute ``notify_update`` which
is a set of callables. Whenever the position is updated, each
of these will be called with the `Progress` instance and the
latest `CheckPoint`.

`Progress` objects also make a small pretense of being an integer.
The expression `int(progress)` returns the current position,
and `+=` and `-=` adjust the position.

This is convenient for coding, but importantly it is also
useful for discretionary use of a Progress with some other
object.
If you want to make a lightweight `Progress` capable class
you can set a position attribute to an `int`
and manipulate it carefully using `+=` and `-=` entirely.
If you decide to incur the cost of maintaining a `Progress` object
you can slot it in:

    # initial setup with just an int
    my_thing.amount = 0

    # later, or on some option, use a Progress instance
    my_thing.amount = Progress(my_thing.amount)

### Method `Progress.__init__(self, position=None, name=None, start=None, start_time=None, throughput_window=None, total=None, units_scale=None)`

Initialise the Progesss object.

Parameters:
* `position`: initial position, default `0`.
* `name`: optional name for this instance.
* `start`: starting position of progress range,
  default from `position`.
* `start_time`: start time of the process, default now.
* `throughput_window`: length of throughput time window in seconds,
  default None.
* `total`: expected completion value, default None.

## Function `progressbar(it, label=None, total=None, units_scale=((0, ''),), **kw)`

Convenience function to construct and run a `Progress.bar`.

Parameters:
* `it`: the iterable to consume
* `label`: optional label, doubles as the `Progress.name`
* `total`: optional value for `Progress.total`,
  default from `len(it)` if supported.
* `units_scale`: optional units scale for `Progress`,
  default `UNSCALED_SCALE`

If `total` is `None` and `it` supports `len()`
then the `Progress.total` is set from it.

All arguments are passed through to `Progress.bar`.

Example use:

    for row in progressbar(rows):
        ... do something with row ...

# Release Log



*Release 20200718.3*:
BaseProgress.bar, progressbar: new optional report_print parameter for reporting on completion.

*Release 20200718.2*:
Bugfix: BaseProgress.status: handle throughput=0 when total=None.

*Release 20200718.1*:
BaseProgress.bar, progressbar: new optional update_frequency parameter for less frequent updates.

*Release 20200718*:
* Readability improvement for default status line.
* progressbar: default units_scale=UNSCALED_SCALE.

*Release 20200716.1*:
BaseProgress.status: round throughput to an int if >=10.

*Release 20200716*:
* BaseProgress.status: distinguish "idle" (position >= total) from "stalled" (position < total).
* BaseProgress.status: make the status very short if the progress is idle.

*Release 20200627*:
* BaseProgress.status: handle throughput=None (before any activity).
* BaseProgress: drop count_of_total_bytes_text, superceded by format_counter (which honours the units_scale).

*Release 20200626*:
* New Progress.bar generator method iterating over an iterable while displaying a progress bar.
* New convenience function progressbar(it,...) which rolls its own Progress instance.
* Progress: always support a throughput window, default to DEFAULT_THROUGHPUT_WINDOW = 5s.
* Improve the default progress bar render returned by Progress.status().

*Release 20200613*:
* BaseProgress, Progress and OverProgress now accept an optional units_scale, such as cs.units.UNSCALED_SCALE, to use when expressing progress - the default remains BINARY_SCALE.
* New arrow(), format_counter() and text_pos_of_total() methods to produce components of the status string for tuning or external reuse.

*Release 20200520*:
OverProgress: throughput and eta implementations.

*Release 20200129.3*:
Test __version__ machinery again.

*Release 20200129.2*:
set __version__ to '20200129.2'

*Release 20200129.1*:
Dummy release to test new __version__.

*Release 20200129*:
New Progress.count_of_total_bytes_text property presenting "3kB/40MB" style text.

*Release 20190812*:
* New OverProgress class which is a composite of a set of subsidiary Progress instances.
* Assorted other small updates.

*Release 20190220*:
* Progress: be somewhat like an int.
* New status() method returning a convenient one line progress status report.

*Release 20180703.2*:
Progress: make .total into a property in order to fire the update notifications.

*Release 20180703.1*:
Progress: additions and changes to API: new .ratio, .elapsed_time, rename .projected to .remaining_time.

*Release 20180703*:
Initial release of cs.progress.
