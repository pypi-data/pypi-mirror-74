#!/usr/bin/env python

"""The setup script."""

from setuptools import setup, find_packages

with open('README.rst') as readme_file:
    readme = readme_file.read()

with open('HISTORY.rst') as history_file:
    history = history_file.read()

requirements = ["spotipy", ]

setup_requirements = ['pytest-runner', ]

test_requirements = ['pytest>=3', ]

setup(
    author="Patrick Christie",
    author_email='patrick.christie.dev@gmail.com',
    python_requires='>=3.5',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    description="A Python implementation of some various different Spotify playlists that I think should alreaydy exist. Fully configurable so you can craft the playlist that you want that acts in the way that you want",
    entry_points={
        'console_scripts': [
            'spotify_playlist_additions=spotify_playlist_additions.cli:main',
        ],
    },
    install_requires=requirements,
    license="MIT license",
    long_description=readme + '\n\n' + history,
    include_package_data=True,
    keywords='spotify_playlist_additions',
    name='spotify_playlist_additions',
    packages=find_packages(include=['spotify_playlist_additions', 'spotify_playlist_additions.*']),
    setup_requires=setup_requirements,
    test_suite='tests',
    tests_require=test_requirements,
    url='https://github.com/CoolDudde4150/spotify_playlist_additions',
    version='0.0.1',
    zip_safe=False,
)
