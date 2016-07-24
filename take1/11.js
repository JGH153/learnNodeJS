const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');


//from 10:

var Emitter = require("events");

var ee = new Emitter();

ee.on('greet', function(){
	console.log ("Someone said hello!?!?!?!")
});

ee.on('greet', function(){
	console.log ("A Greeting occured")
});

console.log("hei!");
ee.emit("greet");
