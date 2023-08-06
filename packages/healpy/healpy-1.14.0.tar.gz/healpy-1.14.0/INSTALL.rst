Installation procedure for Healpy
=================================

Requirements
------------

Healpy depends on the HEALPix C++ and cfitsio C libraries. Source code for both
is included with Healpy and is built automatically, so you do not need to
install them yourself.
Only Linux and MAC OS X are supported, not Windows.

Binary installation with conda (RECOMMENDED)
-----------------------

Conda forge provides a `conda
channel <https://anaconda.org/conda-forge/healpy>`_ with a pre-compiled version of ``healpy``
for linux 64bit and MAC OS X platforms, you can install it in Anaconda with::

    conda config --add channels conda-forge
    conda install healpy

There have also been reports of specific installation issues under Mac OS Catalina 10.15.5 with conda install as the
solver appears to run without finding the required packages. This is a generalised issue with a number of packages,
and not limited to ``healpy``. The most straightforward solution (after adding conda-forge to the channel list) is for
the user to decide which packages they wish to install alongside ``healpy`` and then create a new environment installing
``healpy`` alongside said packages. For instance if one wishes to install ``healpy`` alongside Spyder and My_Package into
newly created environment env_healpy, the command will be::

    conda create --name env_healpy python=3.7 healpy spyder my_package
     
Source installation with Pip
---------------------------

It is possible to build the latest ``healpy`` with `pip <http://www.pip-installer.org>`_ ::

    pip install --user healpy

If you have installed with ``pip``, you can keep your installation up to date
by upgrading from time to time::

    pip install --user --upgrade healpy

On Linux with newer compilers many users reported compilation errors like ``configure: error: cannot run C compiled programs``,
the solution is to specifiy the flags for the C and CXX compiler:

    CC=gcc CXX=g++ CFLAGS='-fPIC' CXXFLAGS='-fPIC' pip install --user healpy

Compilation issues with Mac OS
------------------------------

Currently most people report they cannot install `healpy` on Mac OS either via `pip` or building from source, due to the impossibility of compiling the `HEALPix` based extension.
The only options right now are using `conda-forge` or `Macports`.

Installation on Mac OS with MacPorts
-------------------------------------------------

If you are using a Mac and have the `MacPorts <https://www.macports.org>`_
package manager, it's even easer to install Healpy with::

    sudo port install py27-healpy

Binary `apt-get` style packages are also available in the development versions of
`Debian (sid) <https://packages.debian.org/sid/python-healpy>`_ and
`Ubuntu (utopic) <http://packages.ubuntu.com/utopic/python-healpy>`_.

Almost-as-quick installation from official source release
---------------------------------------------------------

Healpy is also available in the
`Python Package Index (PyPI) <https://pypi.python.org/pypi/healpy>`_. You can
download it with::

    curl -O https://pypi.python.org/packages/source/h/healpy/healpy-1.7.4.tar.gz

and build it with::

    tar -xzf healpy-1.7.4.tar.gz
    pushd healpy-1.7.4
    python setup.py install --user
    popd

If everything goes fine, you can test it::

    python
>>> import matplotlib.pyplot as plt
>>> import numpy as np
>>> import healpy as hp
>>> hp.mollview(np.arange(12))
>>> plt.show()

or run the test suite with::

    cd healpy-* && python setup.py test

Building against external Healpix and cfitsio
---------------------------------------------

Healpy uses pkg-config to detect the presence of the Healpix and cfitsio
libraries. pkg-config is available on most systems. If you do not have
pkg-config installed, then Healpy will download and use (but not install) a
Python clone called pykg-config.

If you want to provide your own external builds of Healpix and cfitsio, then
download the following packages:

* `pkg-config <http://pkg-config.freedesktop.org>`_

* `HEALPix
  <http://sourceforge.net/projects/healpix/files/Healpix_3.11/autotools_packages/>`_
  autotools-style C++ package

* `cfitsio <http://heasarc.gsfc.nasa.gov/fitsio/>`_

If you are going to install the packages in a nonstandard location (say,
``--prefix=/path/to/local``), then you should set the environment variable
``PKG_CONFIG_PATH=/path/to/local/lib/pkgconfig`` when building. No other
environment variable settings are necessary, and you do not need to set
``PKG_CONFIG_PATH`` to use Healpy after you have built it.

Then, unpack each of the above packages and build them with the usual
``configure; make; make install`` recipe.

Development install
-------------------

Developers building from a snapshot of the github repository need:

* ``autoconf`` and ``libtool`` (in Debian or Ubuntu:
  ``sudo apt-get install autoconf automake libtool pkg-config``)

* `cython` > 0.16

* run ``git submodule init`` and ``git submodule update`` to get the bundled
  HEALPix sources

the best way to install healpy if you plan to develop is to build the C++
extensions in place with::

    python setup.py build_ext --inplace

then add the ``healpy`` repository folder to your ``PYTHONPATH`` (e.g. if you
cloned this repository to ``$REPOS`` such that ``$REPOS/healpy/INSTALL.rst``
exists, then add ``$REPOS/healpy`` to your ``PYTHONPATH``).

In case of compilation errors, see the note above in the ``pip`` section.

Clean
-----

When you run "python setup.py", temporary build products are placed in the
"build" directory. If you want to clean out and remove the ``build`` directory,
then run::

    python setup.py clean --all
