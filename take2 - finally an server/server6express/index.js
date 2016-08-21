var express = require("express");
var app = express();

//getting a enviuorment variable (custom), or 3000
var port = process.env.PORT || 3000;

app.get('/', function(request, responce){

	responce.send("<html><head></head><body><h1>Hello</h1></body></html>")

});

app.get('/person/:id', function(request, responce){

	let id = request.params.id;
	responce.send("<html><head></head><body><h1>Hello "+id+"</h1></body></html>")

});

app.get('/api', function(request, responce){

	responce.json({first: "Greger", last: "Hemb"});

});

app.listen(port);
