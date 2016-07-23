var person = {
	firstname : "Greger",
	lastname: "Hemb",
	greet: () => {
		//arrow functiuons do not have this
		console.log("halla =>" + this.firstname);
	},
	greetFunc: function () {
		console.log("hei =>" + this.lastname);
	}
}

person.greet();
person.greetFunc();
console.log(person["firstname"]);
