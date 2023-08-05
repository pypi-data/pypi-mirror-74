#!/usr/bin/env python
"""The setup script."""


import distutils.text_file
from pathlib import Path

from setuptools import setup


def parse_requirements(req):
    return distutils.text_file.TextFile(Path(__file__).with_name(req)).readlines()


with open(Path(__file__).with_name("README.rst")) as f:
    long_description = f.read()

setup(
    version="0.1.1",
    long_description=long_description,
    long_description_content_type="text/x-rst",
    install_requires=parse_requirements("requirements.txt"),
)
