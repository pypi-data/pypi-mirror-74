
# NEWS

## Skytools 3.5 (2020-07-18)

### Fixes

* dbservice: py3 fix for row.values()
* skylog: Use logging.setLogRecordFactory for adding extra fields
* fileutil,sockutil: fixes for win32.
* natsort: py3 fix, improve rules.

### Cleanups

* Set up Github Actions for CI and release.
* Use "with" for opening files.
* Drop py2 syntax.
* Code reformat.
* Convert nose+doctests to pytest.

## Skytools 3.4 (2019-11-14)

* Support Postgres 10 sequences
* Make full\_copy text-based
* Allow None fields in magic\_insert
* Fix iterator use in magic insert
* Fix Python3 bugs
* Switch off Python2 tests, to avoid wasting time.

## Skytools 3.3 (2017-09-21)

* Separate 'skytools' module out from big package
* Python 3 support

## Skytools 3.2 and older

See old changes here:
https://github.com/pgq/skytools-legacy/blob/master/NEWS

