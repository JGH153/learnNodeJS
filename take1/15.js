//call and aplly

var obj = {
	name: 'Jan Greger Hemb',
	greet: function(){
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
//first parm is new this
obj.greet.call({ name: 'Hanne SE' }); //take comma seperated list of parms
obj.greet.apply({ name: 'Markus Hemb' }); //takes array of parms
