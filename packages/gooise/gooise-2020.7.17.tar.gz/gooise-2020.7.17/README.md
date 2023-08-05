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
or installed in a uncommon location. See [https://gitlab.com/scpketer/gooise#Configuring-web-driver] 

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