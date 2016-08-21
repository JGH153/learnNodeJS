"use strict"

var express = require("express");
var app = express();

//getting a enviuorment variable (custom), or 3000
var port = process.env.PORT || 3000;

//expose public folder under /assets automaticly
app.use('/assets', express.static(__dirname + '/public'));

//set template engine
app.set('view engine', 'ejs');

//do it manually
app.use('/', function (request, responce, next) {
	console.log('Request Url:' + request.url);
	next();
});

app.get('/', function(request, responce) {

	responce.render('index');

});

app.get('/person/:id', function(request, responce){

	let id = request.params.id;
	responce.send("<html><head></head><body><h1>Hello "+id+"</h1></body></html>")

});

app.get('/api', function(request, responce){

	responce.json({first: "Greger", last: "Hemb"});

});

app.listen(port);
