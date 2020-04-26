# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Description

This is an app that displays reviews for restaurants located across Manhattan, Brooklyn and Queens in New York City, USA. User can search for restaurants by borough and tap on a restaurant to read customer reviews. 

## Project Overview

The project focuses on three areas progressive app design:

1. Responsive Design
2. Accessibility
3. Offline Availability

## How to run the application

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000` to begin using the application.

## API keys required

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `config.api_key` in both 'main.js' and 'restaurant_info.js` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Service Worker Notes

1. Skeleton assets are saved to the cache when the service worker is first installed.
2. Redundant static caches will be deleted on the service worker's 'activate' event.
3. When the app's internal pages are loaded the service worker will store the data in a dynamic cache on every fetch request.
