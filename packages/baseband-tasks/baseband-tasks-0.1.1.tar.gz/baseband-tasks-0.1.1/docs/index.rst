.. _baseband_tasks_docs:

**************
Baseband-tasks
**************

Welcome to the Baseband-tasks documentation!  Baseband-tasks is a package for
reduction and analysis of radio baseband data.

If you used this package in your research, please cite it via DOI
`10.5281/zenodo.3951543 <https://doi.org/10.5281/zenodo.3951543>`_.

.. note::
   The package was recently renamed. For reproducing old scripts, see the
   `scintillometry branch <https://github.com/mhvk/baseband-tasks/tree/scintillometry>`_.

.. _overview_toc:

Overview
========

.. toctree::
   :maxdepth: 2

   install

.. _tasks_toc:

Tasks
=====

At the core of Baseband-tasks is a collection of "tasks", filehandle-like
classes that can be linked together into a data reduction pipeline.

.. toctree::
   :maxdepth: 1

   tasks/channelize
   tasks/combining
   tasks/conversion
   tasks/convolution
   tasks/dispersion
   tasks/functions
   tasks/integration
   tasks/sampling
   tasks/shaping
   tasks/base

.. _simulation_toc:

Simulation
==========

To help simulate and debug reduction processes, Baseband-tasks allows
one to generate fake signals.

.. toctree::
   :maxdepth: 1

   simulation/generators

.. _input_output_toc:

Input/output
============

Most I/O is via raw files read using :func:`baseband.open`, but
Baseband-tasks offers options to write out intermediate products as
HDF5 files and final products, such as folded profiles, in PSRFITS format.

.. toctree::
   :maxdepth: 1

   io/hdf5/index
   io/psrfits/index

.. _helpers_toc:

Helpers
=======

Baseband-tasks also contains helper modules that assist with calculations and
that link it with other software, such as Fourier transform packages or pulsar
timing software.

.. toctree::
   :maxdepth: 1

   helpers/dm
   helpers/fourier
   helpers/phases

.. _project_details_toc:

Project details
===============

.. image:: https://img.shields.io/badge/powered%20by-AstroPy-orange.svg?style=flat
    :target: https://www.astropy.org/
    :alt: Powered by Astropy Badge

.. image:: https://zenodo.org/badge/DOI/10.5281/zenodo.3951543.svg
   :target: https://doi.org/10.5281/zenodo.3951543
   :alt: DOI 10.5281/zenodo.3951543

.. image:: https://travis-ci.org/mhvk/baseband-tasks.svg?branch=master
   :target: https://travis-ci.org/mhvk/baseband-tasks
   :alt: Test Status

.. image:: https://codecov.io/gh/mhvk/baseband-tasks/branch/master/graph/badge.svg
   :target: https://codecov.io/gh/mhvk/baseband-tasks
   :alt: Coverage Level

.. image:: https://readthedocs.org/projects/baseband-tasks/badge/?version=latest
   :target: https://baseband-tasks.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation Status

.. toctree::
   :maxdepth: 1

   authors_for_sphinx
   changelog
   license
