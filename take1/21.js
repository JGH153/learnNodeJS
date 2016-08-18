function greet(callback, givenName){
	console.log("hallo");

	var data = {
		name: givenName
	}

	callback(data);
}

greet(function(data){
	console.log("herda: " + data.name);
}, "Markus")
