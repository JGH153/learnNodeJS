var eventConfig = require("./config").events;
var Emitter = require("events");

var ee = new Emitter();

ee.on(eventConfig.GREET, function(){
	console.log ("Someone said hello!?!?!?!")
});

ee.on(eventConfig.GREET, function(){
	console.log ("A Greeting occured")
});

console.log("hei!");
ee.emit(eventConfig.GREET);
