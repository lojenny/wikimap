var GoogleMapsLoader = require('google-maps'); // only for common js environments 

GoogleMapsLoader.load(function(google) {
   new google.maps.Map(el, options);
});
GoogleMapsLoader.KEY = 'AIzaSyCXgIOclaPlfHKvME4rZcGpLU36303Yh5g';
GoogleMapsLoader.LIBRARIES = ['places'];


var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(49.246292,-123.116226);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'ramen'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log(place);
    }
  }
}