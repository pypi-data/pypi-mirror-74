# Neo4J API

[![ci](https://github.com/pawamoy/neo4j-api/workflows/ci/badge.svg)](https://github.com/pawamoy/neo4j-api/actions?query=workflow%3Aci)
[![documentation](https://img.shields.io/badge/docs-mkdocs%20material-blue.svg?style=flat)](https://pawamoy.github.io/neo4j-api/)
[![pypi version](https://img.shields.io/pypi/v/neo4j-api.svg)](https://pypi.org/project/neo4j-api/)

A Neo4j API in Python with FastAPI.

## Requirements

Neo4J API requires Python 3.6 or above.

<details>
<summary>To install Python 3.6, I recommend using <a href="https://github.com/pyenv/pyenv"><code>pyenv</code></a>.</summary>

```bash
# install pyenv
git clone https://github.com/pyenv/pyenv ~/.pyenv

# setup pyenv (you should also put these three lines in .bashrc or similar)
export PATH="${HOME}/.pyenv/bin:${PATH}"
export PYENV_ROOT="${HOME}/.pyenv"
eval "$(pyenv init -)"

# install Python 3.6
pyenv install 3.6.8

# make it available globally
pyenv global system 3.6.8
```
</details>

## Installation

With `pip`:
```bash
python3.6 -m pip install neo4j-api
```

With [`pipx`](https://github.com/pipxproject/pipx):
```bash
python3.6 -m pip install --user pipx

pipx install --python python3.6 neo4j-api
```
