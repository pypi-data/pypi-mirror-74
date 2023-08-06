# wal_g810

Automate [g810-led](https://github.com/MatMoul/g810-led) theme creation from generated [pywal](https://github.com/dylanaraps/pywal) colors

## About

`wal_g810` is a small Python utility meant to work with `wal` by reading colors generated from a JSON file and translating them into a `g810-led` compliant profile file.

## Installation

```bash
git clone `https://github.com/MKJM2/wal_g810.git`
cd wal_g810
pip install .
```

### Requirements

* [python3](https://www.python.org/)

    Tested with Python 3.8.3. Uses standard sys calls so should function across all Python 3.

* [pywal](https://github.com/dylanaraps/pywal)

## Usage

**Be sure you've run `wal` at least once to generate colors.json file.**

Simply invoke `wal-g810`  
The generated profile can then be applied by invoking `g810-led -p $HOME/.cache/wal/colors-wal-g810`
