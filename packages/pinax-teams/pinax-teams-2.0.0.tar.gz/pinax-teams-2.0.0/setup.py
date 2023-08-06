from setuptools import find_packages, setup

VERSION = "2.0.0"
LONG_DESCRIPTION = r"""
.. image:: http://pinaxproject.com/pinax-design/patches/pinax-teams.svg
    :target: https://pypi.python.org/pypi/pinax-teams/

===========
Pinax Teams
===========

.. image:: https://img.shields.io/pypi/v/pinax-teams.svg
    :target: https://pypi.python.org/pypi/pinax-teams/

\ 

.. image:: https://img.shields.io/circleci/project/github/pinax/pinax-teams.svg
    :target: https://circleci.com/gh/pinax/pinax-teams
.. image:: https://img.shields.io/codecov/c/github/pinax/pinax-teams.svg
    :target: https://codecov.io/gh/pinax/pinax-teams
.. image:: https://img.shields.io/github/contributors/pinax/pinax-teams.svg
    :target: https://github.com/pinax/pinax-teams/graphs/contributors
.. image:: https://img.shields.io/github/issues-pr/pinax/pinax-teams.svg
    :target: https://github.com/pinax/pinax-teams/pulls
.. image:: https://img.shields.io/github/issues-pr-closed/pinax/pinax-teams.svg
    :target: https://github.com/pinax/pinax-teams/pulls?q=is%3Apr+is%3Aclosed

\ 

.. image:: http://slack.pinaxproject.com/badge.svg
    :target: http://slack.pinaxproject.com/
.. image:: https://img.shields.io/badge/license-MIT-blue.svg
    :target: https://pypi.python.org/pypi/pinax-teams/

\ 

``pinax-teams`` is an app for Django sites that supports open, by invitation, and by application teams.

Supported Django and Python Versions
------------------------------------

+-----------------+-----+-----+-----+
| Django / Python | 3.6 | 3.7 | 3.8 |
+=================+=====+=====+=====+
|  2.2            |  *  |  *  |  *  |
+-----------------+-----+-----+-----+
|  3.0            |  *  |  *  |  *  |
+-----------------+-----+-----+-----+
"""

setup(
    author="Pinax Team",
    author_email="team@pinaxproject.com",
    description="An app for Django sites that supports open, by invitation, and by application teams",
    name="pinax-teams",
    long_description=LONG_DESCRIPTION,
    version=VERSION,
    url="http://github.com/pinax/pinax-teams/",
    license="MIT",
    packages=find_packages(),
    package_data={
        "teams": []
    },
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "Framework :: Django",
        "Framework :: Django :: 2.2",
        "Framework :: Django :: 3.0",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    install_requires=[
        "django>=2.2",
        "django-reversion>=2.0.12",
        "pinax-invitations>=6.1.2",
        "python-slugify>=3.0.4",
        "Pillow>=2.3.0",
        "django-user-accounts>=2.0.3",
        "six>=1.9.0"
    ],
    tests_require=[
        "django-test-plus>=1.0.22",
        "pinax-templates>=1.0.4",
    ],
    test_suite="runtests.runtests",
    zip_safe=False
)
