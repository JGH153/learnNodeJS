angular.module("TestApp", [])

angular.module("TestApp").controller("MainController", mainCtrlFunc);

function mainCtrlFunc(){
	this.message = "Hello";

	this.people = [
		{
			name: "Greger"
		},
		{
			name: "Hanne"
		},
		{
			name: "Markus"
		}
	];

}
