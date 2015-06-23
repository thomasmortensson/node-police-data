/*

This file is the main entry point for the node server. 

Contained within this file is the setup of views, setup of API GET handler and error reporting

This project uses the node framework as well as CSS, HTML and JavaScript. 
For an intro to Node.js see: http://blog.modulus.io/absolute-beginners-guide-to-nodejs

To run the web project make sure to have node.js installed and run the following commands from a shell:

npm install -g bower
npm install
bower install
npm start

*/

// Use a module called 'express' to host web content
var express = require('express');

// path allows us to navigate the file system
var path = require('path');

// We are setting up web routes here. This maps web requests to pages in our website
var routes = require('./routes/index');

// This sets up the API routes and keeps all API functionality centralised in one file
var api = require('./api');

// Start our server
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// serve anything in the 'www' directory to the site (useful for images and resources)
app.use(express.static(path.join(__dirname, 'www')));

// Set up the root page
app.use('/', routes);

// Set up an API at http://localhost:port/api/police
app.get('/api/police', api.police);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500); 
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;