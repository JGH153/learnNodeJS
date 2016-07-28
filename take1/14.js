//template literals

var name = "Greger";

var oldWay = 'Hello ' + name;
var newWay = `Hello ${ name }`; //only easy on US keyboards. Fuck us on norwegian keyboards...

console.log(oldWay);
console.log(newWay);
