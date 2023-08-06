# -*- coding: utf-8 -*-
from setuptools import setup

packages = \
['adopy', 'adopy.base', 'adopy.functions', 'adopy.tasks']

package_data = \
{'': ['*'], 'adopy': ['src/*']}

install_requires = \
['Cython>=0.29', 'numpy', 'pandas', 'scipy>=1.0.0']

extras_require = \
{'docs': ['sphinx', 'sphinx_rtd_theme', 'sphinx-autobuild', 'recommonmark'],
 'interactive': ['jupyterlab'],
 'test': ['pytest', 'pytest-cov', 'codecov']}

setup_kwargs = {
    'name': 'adopy',
    'version': '0.4.0rc2',
    'description': 'Adaptive Design Optimization on Experimental Tasks',
    'long_description': '# ADOpy <img src="https://adopy.github.io/logo/adopy-logo.svg" align="right" width="300px">\n\n[![PyPI](https://img.shields.io/pypi/v/adopy.svg?color=green)](https://pypi.org/project/adopy/)\n[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)\n[![Travis CI](https://travis-ci.org/adopy/adopy.svg?branch=master)](https://travis-ci.org/adopy/adopy)\n[![CodeCov](https://codecov.io/gh/adopy/adopy/branch/master/graph/badge.svg?token=jFnJgnVV1k)](https://codecov.io/gh/adopy/adopy)\n\n**ADOpy** is a Python implementation of Adaptive Design Optimization (ADO; Myung, Cavagnaro, & Pitt, 2013), which computes optimal designs dynamically in an experiment. Its modular structure permit easy integration into existing experimentation code.\n\nADOpy supports Python 3.5 or above and relies on NumPy, SciPy, and Pandas.\n\n### Features\n\n- **Grid-based computation of optimal designs using only three classes**: `adopy.Task`, `adopy.Model`, and `adopy.Engine`.\n- **Easily customizable for your own tasks and models**\n- **Pre-implemented Task and Model classes including**:\n  - Psychometric function estimation for 2AFC tasks (`adopy.tasks.psi`)\n  - Delay discounting task (`adopy.tasks.ddt`)\n  - Choice under risk and ambiguity task (`adopy.tasks.cra`)\n- **Example code for experiments using PsychoPy** ([link][example-code])\n\n[example-code]: https://github.com/adopy/adopy/tree/master/examples\n\n### Resources\n\n- [**Getting started**](https://adopy.org/getting-started.html)\n- [**Documentation**](https://adopy.org)\n- [**Bug reports**](https://github.com/adopy/adopy/issues)\n\n## Citation\nIf you use ADOpy, please cite this package along with the specific version.\nIt greatly encourages contributors to continue supporting ADOpy.\n\n> Yang, J., Pitt, M. A., Ahn, W., & Myung, J. I. (2019).\n> ADOpy: A Python Package for Adaptive Design Optimization.\n> https://doi.org/10.31234/osf.io/mdu23\n\n## References\n- Myung, J. I., Cavagnaro, D. R., and Pitt, M. A. (2013).\n  A tutorial on adaptive design optimization.\n  *Journal of Mathematical Psychology, 57*, 53–67.\n\n',
    'author': 'Jaeyeong Yang',
    'author_email': 'jaeyeong.yang1125@gmail.com',
    'maintainer': None,
    'maintainer_email': None,
    'url': 'https://adopy.org',
    'packages': packages,
    'package_data': package_data,
    'install_requires': install_requires,
    'extras_require': extras_require,
    'python_requires': '>=3.5',
}
from build import *
build(setup_kwargs)

setup(**setup_kwargs)
