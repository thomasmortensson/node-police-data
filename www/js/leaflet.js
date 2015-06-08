// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([52.629729, -2.609690], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
$.get("api/police?lat=52.629729&lng=-2.609690&year=2015&month=03", function(data, status){
    var police_data = JSON.parse(data);
    for (var i=0; i<police_data.length; i++) {
    	console.log(police_data[i].category);
    	L.marker([police_data[i].location.latitude, police_data[i].location.longitude]).addTo(map)
			.bindPopup(police_data[i].category)
			.openPopup();
    }	

});

