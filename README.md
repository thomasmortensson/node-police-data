# node-police-data example

This example aims to be a simple skeleton project for a node application to display information from an open data source on a map. The aims of this project are to teach the concepts of:

- Node.js
- EJS views
- Page routes
- PUT/GET requests
- Static HTML serving (js/css/html/whatever else)
- Access to an open data source
- Usage of leaflet
- NPM and Bower
- Bootstrap (possibly)

I would strongly recommend looking through some sample pages at the following links to understand the frameworks I use to make YOUR life easier. You don't have to understand all of this but any knowledge absorbed could be useful.

The core techonlogies we use are:
- Node.JS
- HTML
- CSS
- JavaScript
- Bower
- Leaflet.js
- Bootstrap

Please try to at least have a play around with HTML, CSS and Javascript as these are the building blocks of everything web, think of them as the foundations. 

At the ABSOLUTE least, try to do the following two tutorials first.
* http://www.codecademy.com/en/tracks/web
* http://www.codecademy.com/en/tracks/javascript

This project uses the UK police data source to plot crimes on a map.
https://data.police.uk/docs/



## Quickstart

- Install Node.js - https://nodejs.org/download/
- Download this repository - https://github.com/thomasmortensson/node-police-data/archive/master.zip
- Unzip this file
- Open node command prompt
- Type:
```
cd project_directory
npm install -g bower
npm install
bower install
npm start
```
- Open browser and enjoy - http://localhost:3000

## Usage

To run the application under normal circumstances
```npm start```

To Exit press ctrl-D

The startup script file is bin/www

The main backend server file is main.js (To edit what the server does edit here)
The route file is routes/index.js (To add pages edit here)
The API methods are in api.js (To add new API methods edit here)
The main web page (index.html) is generated in views/index.ejs (To change what is on the main page edit here)

Client side Javascript code is stored in www/js/leaflet.js (To edit how the map interacts edit here)
Client side styling information is stored in www/css/style.css (To change how the main page looks edit here)

To add client side packages:
``` bower install --save package```

To add server side packages
``` npm install --save package ```

## Additional reading
* https://nodejs.org
* http://nodeschool.io/
* http://www.w3schools.com
* http://leafletjs.com
* http://getbootstrap.com
* http://bower.io
* https://docs.npmjs.com/getting-started/what-is-npm

## Current status

- Skeleton project implemented
- Express set up
- NPM and Bower instaled and initialised
- Added to Github
- Gitignore set up
- Leaflet added to map div
- Routes and views set up
- Static serve folder added
- Add in open data source
- Add GET request for open data to node app
- Combined with Bootstrap
- Basic commenting

## TODO
- More in depth comments
- Make more user friendly

## ISSUES
- If lots of crimes are detected in local area, map can take a while to populate

## Contact
If you have any questions prior to YRS 2015 please email me on tm0797@my.bristol.ac.uk.

I love helping out so please feel free to send me any questions. If something isn't clear for you, it's likely others have similar questions.

I will try my best to help you understand the code and run this example on your own machine, that being said I am fairly busy but will try to get back to you in 2-3 days. 


