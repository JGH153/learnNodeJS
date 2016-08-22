"use strict"

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var templateVariables = {
	name: "Greger",
	messageInfo: "This is my website",
	messageHelp: "Where you can get lost",
};

module.exports = function(app){

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

}
