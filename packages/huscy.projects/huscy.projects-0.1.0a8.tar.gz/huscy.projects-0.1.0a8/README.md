huscy.projects
======

![PyPi Version](https://img.shields.io/pypi/v/huscy-projects.svg)
![PyPi Status](https://img.shields.io/pypi/status/huscy-projects)
![PyPI Downloads](https://img.shields.io/pypi/dm/huscy-projects)
![PyPI License](https://img.shields.io/pypi/l/huscy-projects?color=yellow)
![Python Versions](https://img.shields.io/pypi/pyversions/huscy-projects.svg)
![Django Versions](https://img.shields.io/pypi/djversions/huscy-projects)
[![Coverage Status](https://coveralls.io/repos/bitbucket/huscy/projects/badge.svg?branch=master)](https://coveralls.io/bitbucket/huscy/projects?branch=master)



Requirements
------

- Python 3.6+
- A supported version of Django

Tox tests on Django versions 2.2 and 3.0.



Installation
------

To install `husy.projects` simply run:
```
pip install huscy.projects
```


Configuration
------

We need to hook `huscy.projects` into our project.

1. Add `huscy.projects` into your `INSTALLED_APPS` at settings module:

```python
INSTALLED_APPS = (
	...
	'django_filters',
	'guardian',
	'rest_framework',

	'huscy.projects',
)
```

2. Add Django Guardian ObjectPermissionBackend to AUTHENTICATION_BACKENDS

```python
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'guardian.backends.ObjectPermissionBackend',
)
```

3. Create `huscy.projects` database tables by running:

```
python manage.py migrate
```


Development
------

After checking out the repository you should activate any virtual environment.
Install all development and test dependencies:

```
make install
```

Create migration files and database tables:

```
make makemigrations
make migrate
```

We assume you're having a running postgres database with a user `huscy` and a database also called `huscy`.
You can easily create them by running

```
sudo -u postgres createuser -d huscy
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE huscy TO huscy;"
sudo -u postgres psql -c "ALTER USER huscy WITH PASSWORD '123';"
sudo -u postgres createdb huscy
```
