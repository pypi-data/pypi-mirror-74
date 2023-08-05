#!/usr/bin/env python
# coding: utf-8

"""
    distutils setup
    ~~~~~~~~~~~~~~~

   :copyleft: 2009-2018 by Jason Viloria , see AUTHORS.txt for more details.
    :license: GNU GPL v3 or above, see LICENSE for more details.
"""

from __future__ import division, absolute_import, print_function, unicode_literals
import os
import sys

from setuptools import setup, find_packages, Command

VERSION_STRING="0.0.3"
PACKAGE_NAME = "scriptslib"
URL = "https://github.com/jnvilo/scriptslib"
DOWNLOAD_URL="{}/archive/{}.tar.gz".format(URL, VERSION_STRING)
PACKAGE_ROOT = os.path.dirname(os.path.abspath(__file__))

def get_authors():
    try:
        with open(os.path.join(PACKAGE_ROOT,"AUTHORS.txt"), "r") as f: 
            authors = [l.strip(" *\r\n") for l in f if l.strip().startswith("*")]
    except Exception:
        evalue = sys.exc_info()[1]
        authors = "[Error: %s]" % evalue
        print("Error: {}".format(evalue))
    return authors

def get_requirements():
    reqs = []
    try:
        f = open(os.path.join(PACKAGE_ROOT,"requirements.txt"), "r")
        l = f.readlines()
        for e in l:
            reqs.append(e.strip("\n"))
    except Exception:
        print("Failed to install requirements") 

    return reqs

def get_long_description():
    
    with open(os.path.join(PACKAGE_ROOT,"README.md")) as f:
        long_description = f.read()
        
    return long_description

	
    
setup(
    name=PACKAGE_NAME,
    version=VERSION_STRING,
    description='Collection of commonly used scripts into a packaged format.',
    long_description=get_long_description(), 
    author=get_authors(),
    author_email="jnvilo@gmail.com",
    maintainer="Jason Viloria",
    url=URL,
    download_url = DOWNLOAD_URL, 
    packages=find_packages(),
    install_requires=get_requirements(), 
    include_package_data=True, # include package data under svn source control
    #entry_points={
    #    "console_scripts": [
    #        "creole2html = creole.cmdline:cli_creole2html",
    #        "html2creole = creole.cmdline:cli_html2creole
    #        "html2rest = creole.cmdline:cli_html2rest",
    #        "html2textile = creole.cmdline:cli_html2textile",
    #    ],
    #},
    #zip_safe=True, # http://packages.python.org/distribute/setuptools.html#setting-the-zip-safe-flag
    keywords=["scripts","admin","lib"] ,
    classifiers=[
        # http://pypi.python.org/pypi?%3Aaction=list_classifiers
        #"Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU General Public License (GPL)",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.7",
        "Operating System :: OS Independent",
        "Topic :: Software Development :: Libraries",
        ],
    #test_suite="yacms.tests.get_test_suite",
)
