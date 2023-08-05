from setuptools import setup, find_packages
setup(
    name = 'tidal-dl',
    version="2020.7.16.0",
    license="Apache2",
    description = "Tidal Music Downloader.",

    author = 'YaronH',
    author_email = "yaronhuang@foxmail.com",

    packages = find_packages(),
    include_package_data = True,
    platforms = "any",
    install_requires=["aigpy>=2020.7.3.0", "requests", "ffmpeg",
                      "pycryptodome", "pydub"],
    entry_points={'console_scripts': [ 'tidal-dl = tidal_dl:main', ]}
)
