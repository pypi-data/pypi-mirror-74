from setuptools import find_packages
from setuptools import setup

setup(
    name='netapp-lib',
    packages=find_packages(exclude=['*.tests', '*.tests.*',
                                    'tests.*', '*.tools', '*.tools.*',
                                    'tools.*', 'tests', 'tools']),
    version='2020.3.13',
    license='Apache License, Version 2.0',
    description='netapp-lib is required for Ansible deployments to '
                'interact with NetApp storage systems.',
    author='NetApp, Inc.',
    author_email='ng-ansibleteam@netapp.com',
    install_requires=[
        'xmltodict',
        'lxml'
    ],
    package_data={
        '': ['*.txt', '*.rst'],
    },
    include_package_data=True,
    keywords=['netapp', 'netapp_lib', 'ansible'],
    classifiers=['Environment :: Plugins'],
)
