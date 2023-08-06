# This file is part of Build Your Own Tests
#
# Copyright 2018 Vincent Ladeuil
# Copyright 2013-2016 Canonical Ltd.
#
# This program is free software: you can redistribute it and/or modify it under
# the terms of the GNU General Public License version 3, as published by the
# Free Software Foundation.
#
# This program is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranties of MERCHANTABILITY,
# SATISFACTORY QUALITY, or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License along with
# this program.  If not, see <http://www.gnu.org/licenses/>.

import setuptools
import sys


import byot


def get_scripts():
    if sys.version_info < (3,):
        return ['byot-run2']
    else:
        return ['byot-run']


setuptools.setup(
    name='byot',
    version='.'.join(str(c) for c in byot.__version__[0:3]),
    description=('Build Your Own Tests.'),
    author='Vincent Ladeuil',
    author_email='v.ladeuil+lp@free.fr',
    url='https://launchpad.net/byot',
    license='GPLv3',
    # FIXME: We want 'pyflakes' below but this confuses dh_python3 on xenial
    # (but not on yakkety...) -- vila 2016-07-22
    install_requires=['pep8', 'python-subunit', 'testtools'],
    packages=['byot', 'byot.tests'],
    scripts=get_scripts(),
)
