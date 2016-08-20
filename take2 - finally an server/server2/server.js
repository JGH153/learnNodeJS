var http = require('http');
var fs = require("fs"); //file module

var templateVariables = [
	{name: "MessageName", value: "Greger"},
	{name: "MessageInfo", value: "This is my website"},
	{name: "MessageHelp", value: "Where you can get lost"},
];



http.createServer(function(request, responce){

	responce.writeHead(200, { 'Content-Type': "text/html" });
	//var html = fs.readFileSync(__dirname + '/index.html')

	fs.createReadStream(__dirname + '/index.html').pipe(responce);


	//responce.end();
	console.log(request.url);

}).listen(1337, '127.0.0.1');
