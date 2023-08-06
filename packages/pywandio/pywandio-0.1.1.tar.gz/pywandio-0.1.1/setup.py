#!/usr/bin/env python

import setuptools

setuptools.setup(
    name='pywandio',
    version='0.1.1',
    description='High-level file IO library',
    url='https://github.com/CAIDA/pywandio',
    author='Alistair King, Chiara Orsini',
    author_email='bgpstream-info@caida.org',
    packages=setuptools.find_packages(),
    install_requires=[
        'python-keystoneclient==3.22.0',
        'python-swiftclient',
    ],
    entry_points={'console_scripts': [
        'pywandio-cat = wandio.opener:read_main',
        'pywandio-write = wandio.opener:write_main',
        'pywandio-stat = wandio.opener:stat_main'
    ]}
)
