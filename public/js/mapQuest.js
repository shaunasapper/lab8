function initMap() {
	// add your code here
  L.mapquest.key = '4JuWqcGJlqpGXdTLYMmbDK7xoA9rexv1';

  //'map' refers to a div element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.87, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  // add a marker
  L.marker([32.88, -117.236]).addTo(map);
}
