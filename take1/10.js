var Emitter = require("./ee");

var ee = new Emitter();

ee.on('greet', function(){
	console.log ("Someone said hello!?!?!?!")
});

ee.on('greet', function(){
	console.log ("A Greeting occured")
});

console.log("hei!");
ee.emit("greet");
