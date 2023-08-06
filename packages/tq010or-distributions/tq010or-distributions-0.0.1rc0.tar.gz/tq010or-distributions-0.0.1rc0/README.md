<a href="https://panda-lens.com/#/"><img src="http://tq010or.github.io/panda-favicons.png" width="125" height="125" align="right" /></a>

# Distribution: A package to demonstrate a few statistical distributions

This **tq010or-distribution** package is a demo for a few statistical distributions.

## Features

- Can **sample** from the distribution
- Can **estimate** distribution parameters with **samples**
- Easy **plot** integration
- Support Gaussian and Binomial (as of July 2020) 
- Extensible to include other distributions

## Installation

- **Operating system**: Linux · Windows (Cygwin, MinGW, Visual Studio)
- **Python version**: Python 3.6+

### pip

```bash
pip install tq010or-distribution
```

Or you can install them in your virtual environment:
```bash
python -m venv .env
source .env/bin/activate
pip install tq010or-distribution
```

### Usage
```bash
>>> from distributions.gaussian import Gaussian
>>> g = Gaussian(0, 1)
>>> print(g)
Gaussian(0, 1)
>>> samples = g.sample(10000)
>>> ge = Gaussian.estimate(samples)
>>> print(ge)
Gaussian(0.016869274639641572, 0.9910041611791893)
>>> g1 = Gaussian(0, 3)
>>> g2 = Gaussian(1, 4)
>>> g3 = g1 + g2
>>> assert g3 == g1 + g2
>>> 
```

## Run tests

```bash
python -c "import os; import distributions; print(os.path.dirname(distributions.__file__))"
pip install -r path/to/requirements.txt
python -m pytest <distributions-directory>
```
