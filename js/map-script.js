var map;
var service;
var infowindow;

function initialize() {
	var nyc = new google.maps.LatLng(40.7128, -74.0059);
	
	map = new google.maps.Map(document.getElementById('map'), {
		center: nyc,
		zoom: 15
	});
	
	var fullquery = document.getElementById('search-bar').value;
	var request = {
		location: nyc
		radius: '500'
		query: fullquery
	};
	
	service = new google.maps.places.PlacesService(map);
	service.textSearch(request, callback);
}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		var place = results[0];
		createMarker(results[0]);
	}
}