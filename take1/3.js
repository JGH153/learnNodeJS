var http = require('http');

var varFunc = (a)=>{
	console.log("hihi"+a);
}

varFunc("!");

var helloMod = require('./helloModule');
helloMod();
