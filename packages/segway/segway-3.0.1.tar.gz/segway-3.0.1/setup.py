"""segway: a way to segment the genome

Segway is a tool for easy pattern discovery and identification in
functional genomics data.
"""

# Copyright 2008-2014 Michael M. Hoffman <michael.hoffman@utoronto.ca>

from __future__ import absolute_import

import sys
import subprocess

from segway import __version__

if (sys.version_info[0] == 2 and sys.version_info[1] < 7) or \
   (sys.version_info[0] == 3 and sys.version_info[1] < 4):
    print("Segway requires Python version 2.7 or 3.4 or later")
    sys.exit(1)

from setuptools import find_packages, setup

MINIMUM_GMTK_VERSION = (1, 4, 2)
GMTK_VERSION_ERROR_MSG = """
GMTK version %s was detected.
Segway requires GMTK version %s or later to be installed.
Please update your GMTK version."""

doclines = __doc__.splitlines()
name, short_description = doclines[0].split(": ")
long_description = "\n".join(doclines[2:])

url = "http://pmgenomics.ca/hoffmanlab/proj/%s/" % name.lower()
download_url = "%ssrc/%s-%s.tar.gz" % (url, name, __version__)

classifiers = ["Natural Language :: English",
               "Development Status :: 5 - Production/Stable",
               "Intended Audience :: Science/Research",
               "License :: OSI Approved :: GNU General Public License v2 "
               "(GPLv2)",
               "Topic :: Scientific/Engineering :: Bio-Informatics",
               "Operating System :: Unix",
               "Programming Language :: Python",
               "Programming Language :: Python :: 2.7",
               "Programming Language :: Python :: 3"]

entry_points = """
[console_scripts]
segway = segway.run:main
segway-task = segway.task:main
segway-layer = segway.layer:main
segway-winner = segway.winner:main
"""

# XXX: warn: make sure you have LDFLAGS unset if you are building numpy

# need optbuild>0.1.11 for OptionBuilder_ShortOptWithEquals
# need tables>2.04 (>=r3761) because there is a CArray fill bug until then
# genomedata>=1.4.2 for both Python 2 and 3 support
# optplus>=0.2 for both Python 2 and 3 support

install_requires = ["genomedata>=1.4.2", "autolog>=0.2.0",
                    "textinput>=0.2.0", "optbuild>=0.2.0",
                    "optplus>=0.2.0", "tables>2.0.4", "numpy", "path.py>=11",
                    "colorbrewer>=0.2.0", "drmaa>=0.4a3", "six"]


def check_gmtk_version():
    """ Checks if the supported minimum GMTK version is installed """
    # Typical expected output from "gmtkPrint -version":
    # gmtkPrint (GMTK) 1.4.3
    # Mercurial id: 8995e40101d2 tip
    # checkin date: Fri Oct 30 10:51:44 2015 -0700

    # Older versions:
    # GMTK 1.4.0 (Mercurial id: bdf2718cc6ce tip checkin date: Thu Jun 25 12:31:56 2015 -0700)

    # Try to open gmtkPrint to get the version
    try:
        # blocks until finished
        output_string = subprocess.check_output(["gmtkPrint", "-version"])
    # If GMTK was not found
    except OSError:
        # Raise a runtime error stating that GMTK was not found on the path
        raise RuntimeError("GMTK cannot be found on your PATH.\nPlease "
                           "install GMTK from "
                           "http://melodi.ee.washington.edu/gmtk/ "
                           "before installing Segway.")

    output_lines = output_string.splitlines()

    # Check if there's only one line of output (for older versions)
    if len(output_lines) == 1:
        version_word_index = 1
    else:
        version_word_index = -1

    # Get the first line of output
    first_output_line = output_lines[0].decode()

    # Get the version string from the proper word on the line
    current_version_string = first_output_line.split()[version_word_index]

    # Get the version number to compare with the minimum version
    current_version = map(int, current_version_string.split("."))
    version_zip = zip(current_version, MINIMUM_GMTK_VERSION)
    for current_version_number, minimum_version_number in version_zip:
        # If the version number (from most to least significant digit) is
        # ever less than the minimum
        if current_version_number < minimum_version_number:
            # Raise a runtime error stating the version found and the
            # minimum required
            minimum_version_string = ".".join(map(str, MINIMUM_GMTK_VERSION))
            raise RuntimeError(GMTK_VERSION_ERROR_MSG %
                               (current_version_string,
                                minimum_version_string))


def main():
    check_gmtk_version()
    setup(name=name,
          version=__version__,
          description=short_description,
          author="Michael Hoffman",
          author_email="michael.hoffman@utoronto.ca",
          url=url,
          download_url=download_url,
          classifiers=classifiers,
          long_description=long_description,
          install_requires=install_requires,
          zip_safe=False, # XXX: change back, this is just for better tracebacks
          packages=find_packages("."),
          include_package_data=True,
          entry_points=entry_points
          )

if __name__ == "__main__":
    main()
