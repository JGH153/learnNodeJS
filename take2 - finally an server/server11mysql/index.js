"use strict"

var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://admin:admin@ds013916.mlab.com:13916/addressbook");

var mongoSaver = require("./minimodules/mongodbsave");

var app = express();

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

//getting a enviuorment variable (custom), or 3000
var port = process.env.PORT || 3000;

//expose public folder under /assets automaticly
app.use('/assets', express.static(__dirname + '/public'));

//set template engine
app.set('view engine', 'ejs');

mongoSaver.init(mongoose);
mongoSaver.save(mongoose, "Greger", "Hembus", "Skogen");
mongoSaver.save(mongoose, "Hannis", "Snikkers", "Skogen");

//middleware
app.use('/', function (request, responce, next) {

	console.log('Request Url:' + request.url);

	mongoSaver.find(mongoose, "Greger")

	next();
});


htmlController(app);
apiController(app);

app.listen(port);
