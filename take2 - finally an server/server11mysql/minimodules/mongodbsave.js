
var mongoose = require("mongoose");

var Schema;
var personSchema;
var Person;

exports.init = function(mongoose){

	Schema = mongoose.Schema;

	personSchema = new Schema({
		firstname: String,
		lastname: String,
		address: String
	});

	Person = mongoose.model('Person', personSchema);

}


exports.save = function(mongoose, setFirstname, setLastname, setAddress){

	var greger = Person({
		firstname: setFirstname,
		lastname: setLastname,
		address: setAddress
	});

	greger.save(function(error){
		if(error != null){
			console.log("Error: " + error);
		}else{
			console.log("saved!")
		}

	});

}

exports.find = function(mongoose, findFirstname){ //findFirstname, findLastname, findAddress


	Person.find({firstname: findFirstname}, function(error, data){
		if(error != null){
			console.log("Error: " + error);
		}else{
			console.log("found!: ", data)
		}

	});

}
