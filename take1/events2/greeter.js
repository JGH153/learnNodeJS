'use strict'

var ee = require("events");
var util = require("util");

module.exports = class Greeter extends ee{
	constructor() {
		super();
		this.greeting = "Hello You";
	}
	greet(data){
		console.log(`${this.greeting} + ${data}`);
		this.emit ("greet", data);
	}
}
