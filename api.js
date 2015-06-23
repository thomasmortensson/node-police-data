// The request package allows us to perform an HTTP GET request from an external source
var request = require("request");

// We use exports to allow this method to be called externally
exports.police =function(req, res) {

    // This is the base Open Data API URL, documentation can be found here:
    // https://data.police.uk/docs/
    request_url = "https://data.police.uk/api/crimes-street/all-crime?";

    // Building up the API request with parameters
    request_url += "lat=" + req.query.lat; // Beware this doesn't check arguments (this could cause an SQL injection in the incorrect place)
    request_url += "&lng=" + req.query.lng;
    request_url += "&date=" + req.query.year + "-" + req.query.month;

    // Print requested url to console. Useful for debug
    console.log("URL requested: " + request_url);

    // perform request
    request(request_url, function(error, response, body) {
      // If successful send data to client
      // HTTP Status codes: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes  
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
    
};


