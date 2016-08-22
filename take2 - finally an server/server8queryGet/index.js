"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//getting a enviuorment variable (custom), or 3000
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//expose public folder under /assets automaticly
app.use('/assets', express.static(__dirname + '/public'));

//set template engine
app.set('view engine', 'ejs');

var templateVariables = {
	name: "Greger",
	messageInfo: "This is my website",
	messageHelp: "Where you can get lost",
};

//middleware
app.use('/', function (request, responce, next) {
	console.log('Request Url:' + request.url);
	next();
});

app.get('/', function(request, responce) {

	responce.render('index', templateVariables);

});

var personAge = 12;

app.get('/person/:id', function(request, responce) {

	responce.render('person', { ID: request.params.id, name: request.query.name, age: personAge });

});

app.post('/personJson', jsonParser, function(request, responce) {

	let newAge = parseInt(request.body.age);

	if(Number.isInteger(newAge)){
		personAge = newAge;
		responce.send("Resived json with age!");
	}else{
		responce.send("Error, 'age' undefined!");
	}

	console.log(request.body);
});

app.post('/person', urlencodedParser, function(request, responce) {

	let newAge = parseInt(request.body.age);

	if(Number.isInteger(newAge)){
		personAge = newAge;
		responce.send("Submitted!");
	}else{
		responce.send("Error, 'age' undefined!");
	}
	console.log(request.body);

});

app.get('/api', function(request, responce){

	responce.json({first: "Greger", last: "Hemb"});

});

app.listen(port);
