from setuptools import setup, find_packages

setup(
    name='pansy',
    version='2.0.29',
    zip_safe=False,
    platforms='any',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    python_requires='>=3',
    install_requires=['pycryptodome', 'protobuf>=3.9.1', 'setproctitle', 'netkit', 'pyglet', 'events'],
    url='https://github.com/dantezhu/pansy',
    license='MIT',
    author='dantezhu',
    author_email='zny2008@gmail.com',
    description='pansy',
)
