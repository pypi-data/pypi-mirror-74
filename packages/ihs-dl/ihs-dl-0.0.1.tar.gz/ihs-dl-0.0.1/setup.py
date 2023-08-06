import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
	name = "ihs-dl",
	version = "0.0.1",
	license = "GPLv3",
	description = "IHS Markit Teardown Photo Downloader",
	author = "DerNuntius",
	author_email = "hugo@melder.xyz",
	
	packages = setuptools.find_packages(),
	classifiers = [
		"Programming Language :: Python :: 3",
		"License :: OSI Approved :: GNU General Public License (GPL)",
		"Operating System :: OS Independent",
    	],
	platforms = "any",
	install_requires = ["beautifulsoup4"],
	entry_points={'console_scripts': [ 'ihs-dl = ihs_dl:backend', ]}	
)
