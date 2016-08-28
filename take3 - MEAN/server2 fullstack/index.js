'use strict'

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var people = [
	{
		name: "Greger"
	},
	{
		name: "Hanne"
	},
	{
		name: "Markus"
	}
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + "/public"));

app.get('/', function(request, responce){

	responce.render("index", { serverPeople: people});

});

app.listen(port);
