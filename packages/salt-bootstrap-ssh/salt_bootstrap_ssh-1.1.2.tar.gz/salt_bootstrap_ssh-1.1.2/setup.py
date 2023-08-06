from setuptools import setup, find_packages

version = '1.1.2'

setup(name='salt_bootstrap_ssh',
      version=version,
      description="BBootstrap key based SSH authentication to a Salt Master",
      long_description=open("README.md").read() + "\n" +
                       open("HISTORY.md").read(),
      long_description_content_type="text/markdown",
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        "Programming Language :: Python :: 3.7"
      ],
      keywords=['salt'],
      author='David Davis',
      author_email='davisd50@gmail.com',
      url='https://gitlab.com/davisd50/salt-bootstrap-ssh',
      download_url = '',
      license='MIT',
      packages=find_packages(exclude=['ez_setup']),
      zip_safe=False,
      install_requires=[
          'setuptools',
          'distro',
          'paramiko'
      ],
      entry_points={
          'console_scripts':['salt-bootstrap-ssh=salt_bootstrap_ssh:main']
          }
      )
