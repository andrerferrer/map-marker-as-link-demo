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

It's going to look like this:
```js
const makeMarkerClickable = (marker) => {
  const markerElement = marker.getElement(); // this gets the marker element. console.log it to see!
  // add a nice link to go to
  const linkToGo = `https://www.tripadvisor.com.br/Restaurant_Review-g303506-d6632629-Reviews-Amarelinho_Da_Gloria-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`;
  // wrap the marker element in a <a> tag
  markerElement.innerHTML = `
    <a class='add-some-style' href='${linkToGo}'>
        ${markerElement.innerHTML}
    </a>
  `;
};
```

[Check it here](https://github.com/andrerferrer/map-marker-as-link-demo/commit/2ee3b0035e4668752fcefbb6ef5cf7a8667ea0bc) to see how it was done.

Check it in [app/javascript/plugins/init_mapbox.js](app/javascript/plugins/init_mapbox.js) to see the final code.

[Clone this repo](clone_this_repo.md) and see it working in `localhost:3000/restaurants/1`.

Good Luck and Have Fun
