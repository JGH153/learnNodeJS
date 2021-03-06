var express = require("express");
var app = express();

//getting a enviuorment variable (custom), or 3000
var port = process.env.PORT || 3000;

//expose public folder under /assets automaticly
app.use('/assets', express.static(__dirname + "/public"));

//do it manually
app.use('/', function(request, responce, next){
	console.log("URL: "+request.url);
	next();
});

app.get('/', function(request, responce){

	responce.send('<html><head><link rel="stylesheet" type="text/css" href="assets/style.css"></head><body><h1>Hello</h1></body></html>');
	//responce.send('<html><head></head><body><h1>Hello</h1></body></html>');

});

app.get('/person/:id', function(request, responce){

	let id = request.params.id;
	responce.send("<html><head></head><body><h1>Hello "+id+"</h1></body></html>")

});

app.get('/api', function(request, responce){

	responce.json({first: "Greger", last: "Hemb"});

});

app.listen(port);
