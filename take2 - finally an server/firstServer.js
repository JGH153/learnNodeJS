var http = require('http');

http.createServer(function(request, responce){

	responce.writeHead(200, { 'Content-Type': "text/pain" });
	responce.end("Hello Node!\n");
	console.log(request.url);

}).listen(1337, '127.0.0.1');
