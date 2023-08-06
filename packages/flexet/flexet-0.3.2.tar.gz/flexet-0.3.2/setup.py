from setuptools import setup, find_packages

classifiers = [
    'Development Status :: 3 - Alpha',
    'Intended Audience :: Developers',
    'Programming Language :: Python :: 3.6',
    'Programming Language :: Python :: 3.7',
    'Programming Language :: Python :: 3.8',
    'Programming Language :: Python :: 3.9',
    'License :: OSI Approved :: GNU Affero General Public License v3 or later (AGPLv3+)',
    'Operating System :: OS Independent'
]

with open("README.md", "r") as fh:
    long_description = fh.read()

description = "Flexible Network"

setup(
    name='flexet',
    version='0.3.2',
    packages=find_packages(),
    url='https://github.com/ShadowCodeCz/flexet',
    project_urls={
        'Source': 'https://github.com/ShadowCodeCz/flexet',
        'Tracker': 'https://github.com/ShadowCodeCz/flexet/issues',
    },
    author='ShadowCodeCz',
    author_email='shadow.code.cz@gmail.com',
    description=description,
    long_description=long_description,
    long_description_content_type='text/markdown',
    classifiers=classifiers,
    keywords='flexible modular plugin network',
    license='GNU Affero General Public License v3 or later (AGPLv3+)',
    install_requires=['generic-design-patterns', 'jsonmerge', 'yapsy'],
    entry_points={
        'console_scripts': [
            'flexet=flexet:main',
        ]
    }
)
