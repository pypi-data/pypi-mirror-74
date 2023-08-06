# coding: utf-8

from pathlib import Path
from setuptools import setup, find_packages
from vpv import annotations, resources
import os
import vpv


def get_resources():
    """
    Need to find the non-.py file that are needed for annotations
    Returns
    -------

    """
    # get the IMPC annotation configs
    options_dir = Path(annotations.__file__).parent
    files = [os.path.relpath(x, Path(vpv.__file__).parent) for x in options_dir.rglob('*.yaml')]

    resources_dir = Path(resources.__file__).parent
    resource_files = [os.path.relpath(x, Path(vpv.__file__).parent) for x in resources_dir.rglob('*')]
    files.extend(resource_files)
    return files


setup(
    name='vpv_viewer',
    version='2.3.5',
    packages=find_packages(exclude=("dev")),
	package_data={'': get_resources()},  # Puts it in the wheel dist. MANIFEST.in gets it in source dist
    # package_data={'': ['current_commit',
    #                    'stats/rscripts/lmFast.R',
    #                    'stats/rscripts/r_padjust.R']},  # Puts it in the wheel dist. MANIFEST.in gets it in source dist
    include_package_data=True,
    install_requires=[
        'pyqt5',
        'simpleitk',
        'pyyaml',
        'scipy',
        'appdirs',
        'pillow',
        'lxml',
        'pyqtgraph',
        'toml',
        'python-dateutil',
        'addict'
    ],

    url='https://github.com/mpi2/vpv',
    license='Apache2',
    author='Neil Horner',
    author_email='n.horner@har.mrc.ac.uk, bit@har.mrc.ac.uk',
    description='Viewing and annotation of 3D volumetric phenotype data for the IMPC',
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
     ],
    keywords=['image processing', 'bioinformatics', 'phenotype'],
    entry_points ={
            'console_scripts': [
                'vpv_viewer=vpv.run_vpv:main',
            ]
        },
)
