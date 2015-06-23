var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // Use index.ejs
  res.render('index');
});

//Add pages here like so:
/*
router.get('/contact', function(req, res) {
   // Use contact.ejs
   res.render('contact');
});
*/

module.exports = router;
