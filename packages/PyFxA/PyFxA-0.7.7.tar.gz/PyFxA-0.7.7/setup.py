# -*- coding: utf-8 -*-
import codecs
import os
import sys
from setuptools import setup, find_packages

# Read package meta-data from the containing directory.

here = os.path.abspath(os.path.dirname(__file__))


def open_file(filename):
    """Open a related file with utf-8 encoding."""
    return codecs.open(os.path.join(here, filename), encoding='utf-8')


with open_file("README.rst") as f:
    README = f.read()

with open_file("CHANGES.txt") as f:
    CHANGES = f.read()

with open_file("dev-requirements.txt") as f:
    requires = (ln.strip() for ln in f)
    test_requires = [ln for ln in requires if ln and not ln.startswith("#")]

REQUIREMENTS = [
    "requests>=2.4.2",
    "cryptography",
    "PyBrowserID",
    "PyJWT",
    "hawkauthlib",
    "six>=1.14"
]

if sys.version_info < (2, 7, 9):
    # For secure SSL connexion with Python 2.7 (InsecurePlatformWarning)
    REQUIREMENTS.append('PyOpenSSL')
    REQUIREMENTS.append('ndg-httpsclient')
    REQUIREMENTS.append('pyasn1')


setup(name="PyFxA",
      version='0.7.7',
      description="Firefox Accounts client library for Python",
      long_description=README + "\n\n" + CHANGES,
      classifiers=[
          "Intended Audience :: Developers",
          "Programming Language :: Python",
          "Programming Language :: Python :: 2",
          "Programming Language :: Python :: 2.7",
          "Programming Language :: Python :: 3",
          "Programming Language :: Python :: 3.6",
          "License :: OSI Approved :: Mozilla Public License 2.0 (MPL 2.0)",
      ],
      entry_points={
          'httpie.plugins.auth.v1': [
              'httpie_fxa-browserid = fxa.plugins.requests:FxABrowserIDPlugin',
              'httpie_fxa-bearer = fxa.plugins.requests:FxABearerTokenPlugin'
          ],
          'console_scripts': [
              'fxa-client = fxa.__main__:main'
          ],
      },
      license="MPLv2.0",
      author="Mozilla Services",
      author_email="services-dev@mozilla.org",
      url="https://github.com/mozilla/PyFxA",
      keywords="firefox accounts authentication",
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      install_requires=REQUIREMENTS,
      tests_require=test_requires,
      test_suite="fxa")
