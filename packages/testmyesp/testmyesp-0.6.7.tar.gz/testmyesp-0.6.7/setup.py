
import os
import re

try:
    # Speeds up load time by eliminating the pkg_resources overhead.
    import fastentrypoints

except ImportError:
    pass

from setuptools import setup, find_packages
from setuptools.command.sdist import sdist


PROJECT_PACKAGE_NAME = 'testmyesp'
ROOT_DIST_FILES = ['manage.py', 'settings.py']


class SdistCommand(sdist):
    def make_release_tree(self, base_dir, files):
        super().make_release_tree(base_dir, files)

        # some files from the project root are be part
        # of the project package when using setuptools
        for file in ROOT_DIST_FILES:
            self.copy_file(file, os.path.join(base_dir, PROJECT_PACKAGE_NAME, file))


def package_data_rec(package, directory):
    paths = []
    for path, directories, filenames in os.walk(os.path.join(package, directory)):
        for filename in filenames:
            paths.append(os.path.join(path, filename)[len(package) + 1:])

    return paths


def find_version():
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'testmyesp', '__init__.py')) as f:
        m = re.search(r"VERSION\s*=\s*'(.*?)'", f.read())
        if m:
            return m.group(1)

    return 'unknown'


setup(
    name=PROJECT_PACKAGE_NAME,
    version=find_version(),
    description='A tool to run automated tests for the ESP8266.',
    author='Calin Crisan',
    url='https://gitlab.com/ccrisan/testmyesp',
    license='GPL',
    install_requires=[
        'colibris',
        'redis',
        'rq',
        'pyjwt',
        'pyserial',
        'jsonschema'
    ],
    packages=find_packages(include=PROJECT_PACKAGE_NAME + '/*') + [PROJECT_PACKAGE_NAME + '.migrations'],
    entry_points={
        'console_scripts': [
            'testmyesp=testmyesp.manage:main',
        ]
    },
    cmdclass={
        'sdist': SdistCommand
    }
)
