# photoage

Calculate the age of a photo.


## Install

```
$ pip3 install photoage
```


## Usage


### Library

```python
import datetime
import photoage

# returns the number of days since epoch
photoage.calculate_days('/path/to/photo.jpg')

# returns the number of days since 2017/06/06
photoage.calculate_days('/path/to/photo.jpg',
        birthday=datetime.datetime(2017, 6, 6))

# same, except that the cutting point is 03:00:00 everyday instead of 00:00:00
photoage.calculate_days('/path/to/photo.jpg',
        birthday=datetime.datetime(2017, 6, 6),
        offset=datetime.timedelta(hours=3))

# same, except that it specifies the methods to find out the date time of the photo
# by the way, the default value of the argument `methods` is `('exif',)`
# the current supported methods are "exif" and "stat"
photoage.calculate_days('/path/to/photo.jpg',
        birthday=datetime.datetime(2017, 6, 6),
        methods=('exif', 'stat'))
```


### Command-line Tool

Basic usages are:

```
$ photoage /path/to/photo.jpg
/path/to/photo.jpg: 17325 days since 1970/01/01
$ photoage --birthday=2017/06/06 /path/to/photo.jpg
/path/to/photo.jpg: 2 days since 2017/06/06
$ photoage --birthday=2017/06/06 --offset=03:00:00 /path/to/photo.jpg
/path/to/photo.jpg: 2 days since 2017/06/06
$ photoage --birthday=2017/06/06 /path/to/photos/*.jpg
/path/to/photos/1.jpg: 2 days since 2017/06/06
/path/to/photos/2.jpg: 5 days since 2017/06/06
/path/to/photos/3.jpg: 0 days since 2017/06/06
/path/to/photos/4.jpg: 2 days since 2017/06/06
/path/to/photos/5.jpg: unknown date of photo token
$ photoage --birthday=2017/06/06 --summary /path/to/photos/*.jpg
total number of photo(s): 3 photos
first photo: /path/to/photos/3.jpg, 0 days since 2017/06/06
latest photo: /path/to/photos/2.jpg, 5 days since 2017/06/06
3 missing photo(s): 1, 3, 4 days since 2017/06/06
1 set(s) of duplicate photos:
- 2 days since 2017/06/06: /path/to/photos/1.jpg, /path/to/photos/4.jpg
1 photo(s) with unknown date:
- /path/to/photos/5.jpg
```

Other options can be found by typing:

```
$ photoage --help
```
