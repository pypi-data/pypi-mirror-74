The package allows the profiling of Zope applications.
It is the successor of ``Products.ZopeProfiler`` for ``Zope>=4``.
It uses Python's standard profiling support from its runtime
library  modules ``cProfile`` and ``pstats`` and integrates it with ``Zope``.
Read the corresponding documentation to learn how to interact with
and interpret the collected profiling information.


Installation
============

You can install this package in the same way as you have installed
``Zope``, i.e. either via ``pip`` or via ``buildout``.

Ensure that its ``configure.zcml`` gets executed on startup.
It defines request subscribers to collect profiling data
and the page ``@@profile`` to manage profiling or present collected data.


Profiling
=========

When you start a ``Zope`` instance, profiling is disabled.
You can enable the collection of profiling data via
the page ``@@profile``. This page also allows you to configure
the profiling and present the collected data in various
alternative ways.

The configuration is split into 2 parts: the ``Profiler`` part
controls the collection of profiling base data, the ``Statistics`` part
controls how this information is presented.

The ``Profiler`` configuration allows you to specify which timer
(real time or CPU time) is used for profiling and
which requests should be profiled. For the latter task,
you can define 2 collections of regular expressions: ``include``
and ``exclude``. A request is not profiled if any regular expression
in ``exclude`` matches; if ``include`` is not empty, then a
request is only profiled if it matches at least one of those.
Matching is always performed in search mode on the request's
``PATH_INFO``. When you change the timer, the
collected profiling data is cleared.

The ``Statistics`` configuration essentially provides parameters
for Python's ``pstats``.
Especially, you can select various views (``stats``, ``caller``, ``callee``),
sort according to various criteria (e.g. ``cumulative``, ``internal``, ...),
strip directory information and control the amount of data shown.
Read the Python documentation for ``pstats`` to get details.

Note that profiling usually does not see thread switches.
This is always the case when you use a real time timer
and can also be the case with a CPU time timer (e.g. for Python 2
or on Windows). In those cases, time spend in a foreign thread
may be wrongly accounted for a profiled request. You may
consider configuring Zope to use a single worker thread
to reduce this problem.

Note that both configuration and collected profiling data
is maintained in process memory; i.e. in a multi instance
Zope installation, each instance has its own private data.

Note that profiling reveals important implementation details.
You should take appropriate measures to avoid that it can be
accessed by a hacker. One option is to
make it only available in development installations behind a firewall.


Configuration
=============

``dm.zope.profile`` maintains its configuration in RAM.
As a consequence, configuration changes are lost when the process
is shut down.
You can define the initial configuration on start up via ZCML. 
For this purpose, the package's ``meta.zcml`` defines the
directive ``config`` in namespace
``http://namespaces.zope.org/dm.zope.profile``.

The configuration uses options with either simple values
(``timer``, ``type`` and ``strip_dirs``) or collection values
(``include``, ``exclude``, ``sort_by``, ``restrictions``).
Options with simple values are specified via attributes of
the ``config`` directive. Individual elements of collection
values are specified via ``element`` subdirectives.
Those subdirectives specify the option they provide a partial value for
via their ``name`` attribute and their contribution
via their ``value`` attribute.

``example_config.zcml`` contains an example. It recreates the
code defined default conflguration (and thus serves only as an
a demontration).

Note:
Currently, you cannot omit options in order to inherit them from the
the code defined default configuration: if the ``config`` directive
is used, then the code defined default configuration becomes
completely irrelevant. This might change in the future.
