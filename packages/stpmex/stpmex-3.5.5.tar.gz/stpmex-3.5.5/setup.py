from importlib.machinery import SourceFileLoader

from setuptools import find_packages, setup

version = SourceFileLoader('version', 'stpmex/version.py').load_module()

install_requires = [
    'cryptography==2.9.2',
    'cuenca-validations==0.4.2',
    'requests==2.24.0',
]

test_requires = [
    'black==19.10b0',
    'isort[pipfile]==4.3.21',
    'flake8==3.8.3',
    'mypy==0.782',
    'pytest==5.4.3',
    'pytest-vcr==1.0.2',
    'pytest-cov==2.10.0',
    'requests-mock==1.8.0',
]

with open('README.md', 'r') as f:
    long_description = f.read()

setup(
    name='stpmex',
    version=version.__version__,
    author='Cuenca',
    author_email='dev@cuenca.com',
    description='Client library for stpmex.com',
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/cuenca-mx/stpmex-python',
    packages=find_packages(),
    include_package_data=True,
    package_data=dict(stpmex=['py.typed']),
    python_requires='>=3.6',
    install_requires=install_requires,
    setup_requires=['pytest-runner'],
    tests_require=test_requires,
    extras_require=dict(test=test_requires),
    classifiers=[
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
)
