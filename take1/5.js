
function Person (first, last){

	this.first = first;
	this.last = last;
	this.greets =  function() {
		console.log("internal gutta: " + this.first);
	}
}

Person.prototype.greet =  function() {
	console.log("halla gutta: " + this.last);
}

var greger = new Person("Greger", "Hemb");
console.log(greger.first);
greger.greet();
greger.greets();

var hanne = new Person("Hanne", "Engebretsen");
console.log(hanne.first);
hanne.greet();

console.log(greger.__proto__);
console.log(hanne.__proto__);
console.log(greger.__proto__ === hanne.__proto__);
