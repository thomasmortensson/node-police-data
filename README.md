# node-police-data example

This example project aims to be a simple skeleton for a Node application to display information from an open data source on a map. The aims of this project are to teach the concepts of:

- Node.js
- EJS views
- Page routes
- PUT/GET requests
- Static HTML serving (js/css/html/whatever else)
- Access to an open data source
- Usage of mapping utilities
- Bootstrap

I would recommend looking through some sample pages in the additional reading section as these will help you to understand the frameworks I use. You don't have to understand all of this but any knowledge absorbed will help you understand the more complex parts of this project. Even without additional reading, you should be able to modify portions of this project to get a kick start into the world of web development.

The core techonlogies we use in this project are:

- HTML
- CSS
	- Bootstrap
- JavaScript
	- Node.JS
	- Bower
	- Leaflet.js


HTML, CSS and Javascript are the building blocks of everything web, think of them as the foundations. 

To get a hang of HTML/CSS/JS try spending some time on CodeAcademy. You should be able to start making edits to this project pretty soon after starting :)
* http://www.codecademy.com/en/tracks/web
* http://www.codecademy.com/en/tracks/javascript

This project uses the UK police data source to plot crimes on a map.
https://data.police.uk/docs/

Bower and NPM can be ignored for the most part, these are frameworks we use to make package installation easier for you however after initial setup (See Quick Start) you shouldn't really have to touch them.

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

* The startup script file is bin/www

* The main backend server file is main.js (To edit what the server does edit here)
* The route file is routes/index.js (To add pages edit here)
* The API methods are in api.js (To add new API methods edit here)
* The main web page (index.html) is generated in views/index.ejs (To change what is on the main page edit here)

* Client side Javascript code is stored in www/js/leaflet.js (To edit how the map interacts edit here)
* Client side styling information is stored in www/css/style.css (To change how the main page looks edit here)

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


