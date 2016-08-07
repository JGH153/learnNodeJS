
function Person(first, last){

	this.first = first;
	this.last = last;

}

Person.prototype.greet = function(){

	console.log("hello " + this.first);

};

var greger = new Person("Greger", "Hemb");
var markus = new Person("Markus", "Hemb");

greger.greet();
markus.greet();
