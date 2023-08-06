# gooise
gooise (pronounced as *goo-ee-se*) is a Google Image Search automation tool.

# Usage
## Installation
gooise is available at Python Package Index and thus can be installed by pip:

```shell script
$ pip install gooise
```

pip will also install gooise script to PATH.

## Basic usage
### Searching for local/remote image
```shell script
$ gooise -e image.jpg
$ gooise -e https://example.com/img/image.jpg
```

*Note*: by default, gooise uses Chrome web driver, and it won't work if Chrome is not installed 
or installed in a uncommon location. See [Configuring web driver](https://gitlab.com/scpketer/gooise#Configuring-web-driver)

## Advanced usage
### Configuring web driver
gooise assumes you have Chrome (or other Chromium-based browser) installed and accessible via PATH.
If you are not using Chromium (gooise also works with Firefox, Opera, IE and Edge), you'll need to pass some extra
arguments to gooise:

```shell script
$ gooise -d firefox -b /usr/bin/firefox -e image.jpg
```

### Running in headless mode
*Note*: gooise supports headless mode in Chrome/Firefox only.

Headless mode (enabled with `-e` flag) hides automated browser window preserving its full functionality.
It's usually more preferable since browser in regular mode has to stay focused (Selenium might fail to interact with
a web page if browser window is kept in background).

# Contributing
Google tends to update their frontend once in a while, and thus all HTML tag IDs/classes are updated, too.

If you noticed that gooise isn't working as expected anymore (or not working at all) - you can open an issue or propose
a fix via merge request.

These files contain CSS selectors and web page interaction logic:

* Logic - [flow.py](https://gitlab.com/scpketer/gooise/-/blob/master/gooise/flow.py)
* Conditions - [condition.py](https://gitlab.com/scpketer/gooise/-/blob/master/gooise/condition.py)
* Web page elements location - [locator.py](https://gitlab.com/scpketer/gooise/-/blob/master/gooise/locator.py)
* URL image search - [searcher.py](https://gitlab.com/scpketer/gooise/-/blob/master/gooise/searcher.py)
* Local image uploader - [uploader.py](https://gitlab.com/scpketer/gooise/-/blob/master/gooise/uploader.py)  
