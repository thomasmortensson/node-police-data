// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([51.454513, -2.587910], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// function to be called when user clicks map
function onMapClick(e) {

    // Perform an asynchronous call to the node API to get open data
    $.ajax({async: true, url: "api/police?lat=" + e.latlng.lat + "&lng=" + e.latlng.lng+ "&year=2015&month=03", success: function(data){
    	// Turn returned data string to JSON data
    	var police_data = JSON.parse(data);

    	// For crime in data set
	    for (var i=0; i<police_data.length; i++) {
	    	
	    	// Mark on map
	    	L.marker([police_data[i].location.latitude, police_data[i].location.longitude]).addTo(map)
	    		// Add crime to popup window if clicked
				.bindPopup(police_data[i].category);
   		}	

	}});
}

// Set on click event to function onMapClick
map.on('click', onMapClick);


