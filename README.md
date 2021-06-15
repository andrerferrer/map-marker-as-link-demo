# GOAL

This is a demo to show-case how to implement a map with clickable markers.

This demo was created from [this boilerplate](https://github.com/andrerferrer/geocoder-map#goal).

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### SETUP

**Remember to create a `.env` file and add your [mapbox api key](https://account.mapbox.com/) to it.**

If you don't know how to do it, [check how to here](https://github.com/andrerferrer/geocoder-map#2-grab-a-mapbox-api-key).

### How to?

We'll use the method [getElement()](https://docs.mapbox.com/mapbox-gl-js/api/markers/#marker#getelement) to find the marker and add an event listener.

Check it in [app/javascript/plugins/init_mapbox.js](app/javascript/plugins/init_mapbox.js).

[Clone this repo](clone_this_repo.md) and see it working in `localhost:3000/restaurants/1`.

Good Luck and Have Fun
