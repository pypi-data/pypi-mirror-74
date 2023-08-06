![](http://pinaxproject.com/pinax-design/patches/pinax-teams.svg)

# Pinax Teams

[![](https://img.shields.io/pypi/v/pinax-teams.svg)](https://pypi.python.org/pypi/pinax-teams/)

[![CircleCi](https://img.shields.io/circleci/project/github/pinax/pinax-teams.svg)](https://circleci.com/gh/pinax/pinax-teams)
[![Codecov](https://img.shields.io/codecov/c/github/pinax/pinax-teams.svg)](https://codecov.io/gh/pinax/pinax-teams)
[![](https://img.shields.io/github/contributors/pinax/pinax-teams.svg)](https://github.com/pinax/pinax-teams/graphs/contributors)
[![](https://img.shields.io/github/issues-pr/pinax/pinax-teams.svg)](https://github.com/pinax/pinax-teams/pulls)
[![](https://img.shields.io/github/issues-pr-closed/pinax/pinax-teams.svg)](https://github.com/pinax/pinax-teams/pulls?q=is%3Apr+is%3Aclosed)

[![](http://slack.pinaxproject.com/badge.svg)](http://slack.pinaxproject.com/)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

* [About Pinax](#about-pinax)
* [Important Links](#important-links)
* [Overview](#overview)
  * [Dependencies](#dependencies)
  * [Supported Django and Python Versions](#supported-django-and-python-versions)
* [Documentation](#documentation)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Settings](#settings)
  * [Models](#models)
  * [Middleware](#middleware)
  * [Template Tags](#template-tags)
  * [Signals](#signals)
  * [Views](#views)
* [Change Log](#change-log)
* [Contribute](#contribute)
* [Code of Conduct](#code-of-conduct)
* [Connect with Pinax](#connect-with-pinax)
* [License](#license)

## About Pinax

Pinax is an open-source platform built on the Django Web Framework. It is an ecosystem of reusable Django apps, themes, and starter project templates. This collection can be found at http://pinaxproject.com.


## Important Links

Where you can find what you need:
* Releases: published to [PyPI](https://pypi.org/search/?q=pinax) or tagged in app repos in the [Pinax GitHub organization](https://github.com/pinax/)
* Global documentation: [Pinax documentation website](https://pinaxproject.com/pinax/)
* App specific documentation: app repos in the [Pinax GitHub organization](https://github.com/pinax/)
* Support information: [SUPPORT.md](https://github.com/pinax/.github/blob/master/SUPPORT.md) file in the [Pinax default community health file repo](https://github.com/pinax/.github/)
* Contributing information: [CONTRIBUTING.md](https://github.com/pinax/.github/blob/master/CONTRIBUTING.md) file in the [Pinax default community health file repo](https://github.com/pinax/.github/)
* Current and historical release docs: [Pinax Wiki](https://github.com/pinax/pinax/wiki/)


## pinax-teams

### Overview

`pinax-teams` is an app for Django sites that supports open, by invitation, and by application teams.

#### Dependencies

* django-appconf
* django-reversion
* django-user-accounts
* pillow
* pinax-invitations
* six
* python-slugify

See [`setup.py`](https://github.com/pinax/pinax-teams/blob/master/setup.py) for specific required versions of these packages.


#### Supported Django and Python Versions

Django / Python | 3.6 | 3.7 | 3.8
--------------- | --- | --- | ---
2.2  |  *  |  *  |  *
3.0  |  *  |  *  |  *


## Documentation

### Installation

To install pinax-teams:

```shell
    $ pip install pinax-teams
```

Add `pinax.teams` and other required apps to your `INSTALLED_APPS` setting:

```python
    INSTALLED_APPS = [
        # other apps
        "account",
        "pinax.invitations",
        "pinax.teams",
        "reversion",
    ]
```

Optionally add `TeamMiddleware` to your `MIDDLEWARE` setting:

```python
    MIDDLEWARE = [
        # other middleware
        "pinax.teams.middleware.TeamMiddleware",
    ]
```

Add `pinax.teams.urls` to your project urlpatterns:

```python
    urlpatterns = [
        # other urls
        url(r"^account/", include("account.urls")),
        url(r"^teams/", include("pinax.teams.urls", namespace="pinax_teams")),
    ]
```

### Usage

### Settings

#### PINAX_TEAMS_HOOKSET

#### PINAX_TEAMS_NAME_BLACKLIST

#### PINAX_TEAMS_PROFILE_MODEL

### Models

#### BaseMembership

#### BaseTeam

#### Membership

#### SimpleMembership

#### SimpleTeam

#### Team

### Middleware

#### TeamMiddleware

#### WSGITeamMiddleware

### Template Tags

#### `available_teams`

Return iterable of open-membership `Team`s which `request.user` may join.
If user is "staff" they may join any membership-type team.
Iterable excludes teams user is already associated with.

```django
    {% available_teams as available_teams %}
```

### Signals

#### pinax_teams.accepted_membership

#### pinax_teams.added_member

#### pinax_teams.demoted_member

#### pinax_teams.invited_user

#### pinax_teams.promoted_member

#### pinax_teams.rejected_membership

#### pinax_teams.removed_membership

#### pinax_teams.resent_invite

### Templates

#### `signup.html`

#### `team_detail.html`

#### `team_form.html`

#### `team_list.html`

#### `team_manage.html`

#### `_invite_form.html`

#### `_membership.html`

### Views


## Change Log

### 2.0.0

* Drop Django 1.11, 2.0, and 2.1, and Python 2,7, 3.4, and 3.5 support
* Add Django 2.2 and 3.0, and Python 3.6, 3.7, and 3.8 support
* Update packaging configs
* Direct users to community resources

### 1.0.6

* Switch to using python-slugify from unicode-slugify

### 1.0.5

* Replace render_to_string `context_instance` kwarg.
* Add view tests

### 1.0.4

* Update pinax-invitations version requirement

### 1.0.3

* Fix namespacing

### 1.0.2

Revert `on_delete=CASCADE` for `null=True` model fields

### 1.0.1

* Standardize template location to "pinax/teams/"
* Add template list to documentation

### 1.0.0

* Drop Django v1.8, v.1.9, v1.10 support
* Add Django 2.0 support and compatibility testing
* Standardize documentation layout
* Convert CI and coverage to CircleCi and CodeCov
* Add PyPi-compatible long description
* Use "PINAX_TEAMS_" rather than "TEAMS_" prefix for settings
* Update installation requirements

## 0.12.2

* BI: Move `WSGITeamMiddleware` to it's own module to resolve issues with the custom app label.
This BI change was made in 0.12.2 as `WSGITeamMiddleware` had not been documented or demonstrated.

## 0.12.1

* Update `context_urls.py` to reference the correct views

## 0.12

* Add `SimpleTeam` and `SimpleMembership` models [PR #46](https://github.com/pinax/pinax-teams/pull/46)

## 0.11.5

* Add initiating user to membership signals [PR #42](https://github.com/pinax/pinax-teams/pull/42)
* Refactor TeamManageView and TeamInviteView as CBVs [PR #43](https://github.com/pinax/pinax-teams/pull/43)
* Remove assumptions around auth.User model [PR #40](https://github.com/pinax/pinax-teams/pull/40)
* Fix invitee to call to_user_email method [PR #41](https://github.com/pinax/pinax-teams/pull/41)
* Fix Membership verbose names in model meta [PR #45](https://github.com/pinax/pinax-teams/pull/45)
* Ensure team exists in template context [PR #44](https://github.com/pinax/pinax-teams/pull/44)

**Backwards Incompatible Changes**

* `TEAM_NAME_BLACKLIST` has been renamed to `PINAX_TEAMS_NAME_BLACKLIST` for consistency with other application settings


## Contribute

[Contributing](https://github.com/pinax/.github/blob/master/CONTRIBUTING.md) information can be found in the [Pinax community health file repo](https://github.com/pinax/.github).


## Code of Conduct

In order to foster a kind, inclusive, and harassment-free community, the Pinax Project has a [Code of Conduct](https://github.com/pinax/.github/blob/master/CODE_OF_CONDUCT.md). We ask you to treat everyone as a smart human programmer that shares an interest in Python, Django, and Pinax with you.


## Connect with Pinax

For updates and news regarding the Pinax Project, please follow us on Twitter [@pinaxproject](https://twitter.com/pinaxproject) and check out our [Pinax Project blog](http://blog.pinaxproject.com).


## License

Copyright (c) 2012-present James Tauber and contributors under the [MIT license](https://opensource.org/licenses/MIT).
