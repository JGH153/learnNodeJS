'use strict'

var Greeter = require("./greeter")

var greeter1 = new Greeter();

greeter1.on('greet', function(data){
	console.log("Someone Greeted: " + data);
})

greeter1.greet("Greger");
