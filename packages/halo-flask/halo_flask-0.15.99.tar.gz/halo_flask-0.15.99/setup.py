from io import open

from setuptools import setup

# python setup.py sdist --formats=zip
# python setup.py sdist bdist_wheel
# twine upload dist/halo_flask-0.13.8.tar.gz -r pypitest

with open("README.md", "r") as h:
    long_description = h.read()

setup(
    name='halo_flask',
    version='0.15.99',
    packages=['halo_flask', 'halo_flask.flask', 'halo_flask.schema','halo_flask.providers', 'halo_flask.providers.cloud', 'halo_flask.providers.cloud.aws', 'halo_flask.providers.onprem', 'halo_flask.providers.ssm'],
    data_files=[('schema', ['halo_flask/schema/saga_schema.json'])],
    package_data={'schema': ['halo_flask/schema/saga_schema.json']},
    url='https://github.com/yoramk2/halo_flask',
    license='MIT License',
    author='yoramk2',
    author_email='yoramk2@yahoo.com',
    description='this is the Halo framework library for Flask',
    long_description=long_description,
    long_description_content_type="text/markdown",
    classifiers=[
        'Environment :: Console',
        'License :: OSI Approved :: Apache Software License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3.6',
        'Framework :: Flask',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ]
)
