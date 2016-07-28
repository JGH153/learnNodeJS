var ee = require("events");
var util = require("util");

function Greeter(){
	ee.call(this);
	this.greeting = "Hello You";
}

util.inherits(Greeter, ee);

Greeter.prototype.greet = function(data){
	console.log(this.greeting + " + " + data);
	this.emit ("greet", data);
}

var greeter1 = new Greeter();

greeter1.on('greet', function(data){
	console.log("Someone Greeted: " + data);
})

greeter1.greet("Greger");
