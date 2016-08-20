var http = require('http');
var fs = require("fs"); //file module

var templateVariables = [
	{name: "MessageName", value: "Greger"},
	{name: "MessageInfo", value: "This is my website"},
	{name: "MessageHelp", value: "Where you can get lost"},
];

var myObj = {
	first: "Jan Greger",
	last: "Hemb"
}



http.createServer(function(request, responce){

	if(request.url === '/'){

		fs.createReadStream(__dirname + '/index.html').pipe(responce);

	}else if(request.url === '/api'){

		responce.writeHead(200, { 'Content-Type': "application/json" });
		responce.end(JSON.stringify(myObj));

	}else{

		responce.writeHead(404);
		responce.end("404 not found");

	}


	console.log(request.url);

}).listen(1337, '127.0.0.1');
