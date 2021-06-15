import mapboxgl from 'mapbox-gl';

const zoomMapToMarker = (map, marker) => {
  const bounds = new mapboxgl.LngLatBounds();
  bounds.extend([ marker.lng, marker.lat ])
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const addMarkerToMap = (map) => {
  const mapElement = document.getElementById('map');

  const markerData = JSON.parse(mapElement.dataset.marker);
  const marker = new mapboxgl.Marker()
  .setLngLat([ markerData.lng, markerData.lat ])
  .addTo(map);



  const markerElement = marker.getElement(); // this gets the marker element. console.log it to see!
  // add a nice link to go to
  const linkToGo = `https://www.tripadvisor.com.br/Restaurant_Review-g303506-d6632629-Reviews-Amarelinho_Da_Gloria-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html`
  // wrap the marker element in a <a> tag
  markerElement.innerHTML = `
    <a class='add-some-style' href='${linkToGo}'>
        ${markerElement.innerHTML}
    </a>
  `



  zoomMapToMarker(map, markerData)
}

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    addMarkerToMap(map)
  }
};

export { initMapbox };
