import os
from setuptools import setup, find_packages

def __path(filename):
    return os.path.join(os.path.dirname(__file__), filename)

VERSION = '1.0.00'

setup(
    name='datahub_core',
    version=VERSION,
    url='https://github.com/finos/datahub',
    license='',
    packages=find_packages(exclude=['contrib', 'docs', 'tests']),
    package_data={'datahub_core': [
        './data/codes.txt',
        './data/company_names.txt',
        './data/country-codes.txt',
        './data/sic-codes.txt',
        './data/sic-conventions.json',
        './data/sic-ranges.txt',
        './data/addresses/US.json',
        './data/funds/asset_class.csv',
        './data/funds/classes.csv',
        './data/funds/asset_class.csv',
        './data/funds/dividend_treatment.csv',
        './data/funds/regions.csv',
        './data/**'
    ]},
    author='Paul Groves',
    description='Synthetic data generation tools for financial markets',
    include_package_data=True,
    zip_safe=True,
    install_requires=[
        'Faker',
        'numpy',
        'pandas',
        'scipy',
        'sklearn'
    ]
)
