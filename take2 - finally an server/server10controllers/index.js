"use strict"

var express = require("express");

var app = express();

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

//getting a enviuorment variable (custom), or 3000
var port = process.env.PORT || 3000;


//expose public folder under /assets automaticly
app.use('/assets', express.static(__dirname + '/public'));

//set template engine
app.set('view engine', 'ejs');

//middleware
app.use('/', function (request, responce, next) {
	console.log('Request Url:' + request.url);
	next();
});


htmlController(app);
apiController(app);

app.listen(port);
