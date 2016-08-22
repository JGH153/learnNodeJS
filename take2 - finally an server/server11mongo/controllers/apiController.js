"use strict"

module.exports = function(app){

	app.get('/api/person/:id', function(request, responce){

		responce.json({first: "Greger", last: "Hemb"});

	});

	app.post('/api/person', function(request, responce){

		//save

	});

	app.delete('/api/person/:id', function(request, responce){

		//delete

	});

}
