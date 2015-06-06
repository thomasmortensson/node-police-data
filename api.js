var request = require("request");

exports.police =function(req, res) {

    request_url = "https://data.police.uk/api/crimes-street/all-crime?";
    request_url += "lat=" + req.query.lat; // Beware this doesn't check arguments (this could cause an SQL injection in the incorrect place)
    request_url += "&lng=" + req.query.lng;
    request_url += "&date=" + req.query.year + "-" + req.query.month;

    console.log("URL requested: " + request_url);
    request(request_url, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
    
};


