<div align="center">
  <img src="https://raw.githubusercontent.com/Edenskull/KleenExtractor/master/.github/_static/kleenextractor.png">
</div>

<div align="center">

[![GitHub license](https://img.shields.io/github/license/Edenskull/KleenExtractor?color=blue&style=for-the-badge)](https://github.com/Edenskull/KleenExtractor/blob/master/LICENSE)
![GitHub repo size](https://img.shields.io/github/repo-size/Edenskull/KleenExtractor?color=green&style=for-the-badge)
![GitHub repo size](https://img.shields.io/badge/Python-3.6%20%7C%203.7-yellow?style=for-the-badge)

</div>

# Kleen-Extractor
Simple python library that handle the extraction of a source folder to sqlite database.

## Table of contents
* [Installation](#installation)
* [Documentation](#documentation)

## Installation

You can install the module via pip :  
```pip install kleenextractor```

or via wheel file [From PyPi](https://pypi.org/project/KleenExtractor/#modal-close) :  
```
pip install wheel
python -m wheel install wheel_file.whl
```

## Documentation

The aim of kleenextractor is to make it simple for the user to export the list of files and folders.  
First import it to your script :
```PYTHON3
from kleenextractor import kleenextractor
```

Then you can setup the source folder at first :

```PYTHON3
kleenextractor.set_path_source("d:\\my_folder")
```

Then you can run the extract by directly call extract_folder() function

```PYTHON3
kleenextractor.extract_folder()
```

And here you get a "extract.db" file in the folder of the current project.
