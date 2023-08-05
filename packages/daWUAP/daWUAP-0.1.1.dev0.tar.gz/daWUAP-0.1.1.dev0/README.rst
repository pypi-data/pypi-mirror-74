============
daWUAP - data assimilation Water Use and Agricultural Productivity Model
============

The data assimilation Water Use and Agricultural Productivity model (daWUAP) is a hydro-economic model that couples an economic model of agricultural production calibrated using positive mathematical programming (PMP) and a semidistributed rainfall-runoff-routing model that simulates water available to producers.

Features:

* Calibration of economic component can use standard the mathematical programming method or a new recursive stochastic filter.
* Stochastic calibration permits to obtain simulation results of agricultural outputs (land and water allocation, etc) as probability distributions that reflect the quality of the calibration.
* Recursive stochastic filter permits calibration of economic model with noisy but frequent remote sensing observations of agricultural activity.
* Model permits to trace the effect of producer choices on the hydrologic system and on other users.

Contributions and comments are welcome using Github at:
https://bitbucket.org/umthydromodeling/dawuap.git

Dependencies
============

Please note that daWUAP requires:

* Python >= 3.7
* `GDAL support <https://gdal.org/>`_ (version 1.13 or higher)
* `HDF5 support <https://www.hdfgroup.org/solutions/hdf5/>`_


Installation
============

There are multiple ways to install the ``dawuap`` Python package.

* Using ``pip`` in "editable" mode: ``pip install -e .``

Installation from Source
------------------------

It is recommended that you install the package in a virtual environment, either with ``virtualenv`` or ``conda``. In general:

#. Download or clone repository;
#. Change your working directory (``cd``) to the repository directory;
#. ``python setup.py install``

**Or, for installation using conda:**

#. Download or clone repository;
#. Change your working directory (``cd``) to the repository directory;
#. Create a new environment: ``conda create --name dawuap python=3``
#. Activate the environment: ``source activate dawuap``
#. ``conda install .``


Documentation
=============

The documentation available as of the date of this release is included in HTML format in the Documentation directory of the repository. `The most up-to-date documentation can be found here. <https://dawuap.readthedocs.io/en/latest/>`_


Licensing
=========

  Please see the file called LICENSE.txt.


Bugs & Contribution
===================

Please use Bitbucket to report bugs, feature requests and submit your code:
https://bitbucket.org/umthydromodeling/dawuap/issues

:author: Marco Maneta
:date: 2020/04/01
