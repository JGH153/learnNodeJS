"use strict"

var express = require("express");

var mysql = require("mysql");

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

	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'nodeDev'
	});

	connection.connect();

	connection.query('SELECT * from person', function(err, rows, fields) {
		if (!err){
			//console.log('The rows is: ', rows);
			console.log('The person  is: ', rows[0].first_name);
			//console.log('The fields is: ', fields);



		}else{
			console.log('Error while performing Query.', err);
		}
	});

	var post  = {first_name: "Markus", last_name: 'Hemb', age: 44};
	var query = connection.query('INSERT INTO person SET ?', post, function(err, result) {
		// Neat!
		console.log("done: " + err);
	});
	console.log(query.sql);

	connection.end();

	next();
});


htmlController(app);
apiController(app);

app.listen(port);
