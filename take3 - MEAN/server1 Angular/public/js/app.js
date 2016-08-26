angular.module("TestApp", [])

angular.module("TestApp").controller("MainController", mainCtrlFunc);

function mainCtrlFunc(){
	this.message = "Hello";
}
