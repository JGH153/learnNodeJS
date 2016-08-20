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

	//async
	fs.readFile(__dirname + "/index.html", 'utf8', function(err, data){

		var msgName = "Greger";

		templateVariables.forEach(function(item){
			data = data.replace("{"+item.name+"}", item.value);
		});


		//horrible
		responce.end(data);
	});

	//responce.end();
	console.log(request.url);

}).listen(1337, '127.0.0.1');
