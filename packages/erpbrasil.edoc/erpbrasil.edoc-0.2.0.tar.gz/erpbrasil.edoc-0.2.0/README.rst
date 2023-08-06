========
Overview
========

.. start-badges

.. list-table::
    :stub-columns: 1

    * - docs
      - |docs|
    * - tests
      - | |travis| |appveyor| |requires|
        | |codecov|
    * - package
      - | |version| |wheel| |supported-versions| |supported-implementations|
        | |commits-since|
.. |docs| image:: https://readthedocs.org/projects/erpbrasil.edoc/badge/?style=flat
    :target: https://readthedocs.org/projects/erpbrasiledoc
    :alt: Documentation Status

.. |travis| image:: https://api.travis-ci.org/erpbrasil/erpbrasil.edoc.svg?branch=master
    :alt: Travis-CI Build Status
    :target: https://travis-ci.org/erpbrasil/erpbrasil.edoc

.. |appveyor| image:: https://ci.appveyor.com/api/projects/status/github/erpbrasil/erpbrasil.edoc?branch=master&svg=true
    :alt: AppVeyor Build Status
    :target: https://ci.appveyor.com/project/erpbrasil/erpbrasil.edoc

.. |requires| image:: https://requires.io/github/erpbrasil/erpbrasil.edoc/requirements.svg?branch=master
    :alt: Requirements Status
    :target: https://requires.io/github/erpbrasil/erpbrasil.edoc/requirements/?branch=master

.. |codecov| image:: https://codecov.io/github/erpbrasil/erpbrasil.edoc/coverage.svg?branch=master
    :alt: Coverage Status
    :target: https://codecov.io/github/erpbrasil/erpbrasil.edoc

.. |version| image:: https://img.shields.io/pypi/v/erpbrasil.edoc.svg
    :alt: PyPI Package latest release
    :target: https://pypi.org/project/erpbrasil.edoc

.. |commits-since| image:: https://img.shields.io/github/commits-since/erpbrasil/erpbrasil.edoc/v0.2.0.svg
    :alt: Commits since latest release
    :target: https://github.com/erpbrasil/erpbrasil.edoc/compare/v0.2.0...master

.. |wheel| image:: https://img.shields.io/pypi/wheel/erpbrasil.edoc.svg
    :alt: PyPI Wheel
    :target: https://pypi.org/project/erpbrasil.edoc

.. |supported-versions| image:: https://img.shields.io/pypi/pyversions/erpbrasil.edoc.svg
    :alt: Supported versions
    :target: https://pypi.org/project/erpbrasil.edoc

.. |supported-implementations| image:: https://img.shields.io/pypi/implementation/erpbrasil.edoc.svg
    :alt: Supported implementations
    :target: https://pypi.org/project/erpbrasil.edoc


.. end-badges

Emissão de documentos fiscais e outras obrigações (NF-E, NFS-E, MDF-E, CT-E, REINF, E-SOCIAL)

* Free software: MIT license

Installation
============

::

    pip install erpbrasil.edoc

Documentation
=============


https://erpbrasiledoc.readthedocs.io/


Development
===========

To run the all tests run::

    tox

Note, to combine the coverage data from all the tox environments run:

.. list-table::
    :widths: 10 90
    :stub-columns: 1

    - - Windows
      - ::

            set PYTEST_ADDOPTS=--cov-append
            tox

    - - Other
      - ::

            PYTEST_ADDOPTS=--cov-append tox
