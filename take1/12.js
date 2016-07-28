
var person = {
	firstname: '',
	lastname: '',
	greet: function(){
		return this.firstname + ' ' + this.lastname;
	}
}

var greger = Object.create(person);
greger.firstname = 'Greger';
greger.lastname = 'Hemb';

var hanne = Object.create(person);
hanne.firstname = 'Hanne';
hanne.lastname = 'SE';

console.log(greger.greet());
console.log(hanne.greet());
