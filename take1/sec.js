var express = require('express');
var app = express();

var fileSystem = require('fs');
var path = require('path');

var directory = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(directory, 'target.js');

console.log('directory:'+directory);

//make temp folder and copy current source file into that with name target
fileSystem.mkdir(directory, function(error){
	
	if(error){
		
		handleError(error);	
		
	}else{
	
		fileSystem.readFile(source, function(error, content){
			
			if(error){
				
				handleError(error);	
				
			}else{
				
				fileSystem.writeFile(target, content, function(error){
					
						if(error){
				
							handleError(error);	
							
						}else{	
						
							console.log('File Copy Done');
						
						}
					
				});
				
			}
			
		});
		
	}
	
});



function handleError(error){
	
	console.error(error);
	
}




fileSystem.readFile(__filename, {encoding: 'utf8'}, gotFileContent);
function gotFileContent(error, content){
	
	if(error){
		console.error(error);
	}else{
		//console.log('this file contains: \n\n%s', content);
	}
	
}













var server = app.listen(3000, '127.0.0.1', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});



// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// respond with "Hello World!" on the homepage
app.get('/user', function (req, res) {
  res.send('Hello User World!');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

