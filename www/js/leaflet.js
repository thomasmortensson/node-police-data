// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([51.454513, -2.587910], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function onMapClick(e) {
    console.log(e.latlng);
    $.ajax({async: true, url: "api/police?lat=" + e.latlng.lat + "&lng=" + e.latlng.lng+ "&year=2015&month=03", success: function(data){
    var police_data = JSON.parse(data);
    for (var i=0; i<police_data.length; i++) {
    	console.log(police_data[i].category);
    	L.marker([police_data[i].location.latitude, police_data[i].location.longitude]).addTo(map)
			.bindPopup(police_data[i].category)
			.openPopup();
    }	

}});
}

map.on('click', onMapClick);


