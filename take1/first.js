var http = require('http');

var mysql = require('mysql');

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World YOLO SWAG =)");

  console.log("request:", request.url);
  response.write("request: <br>"+request.url);


  response.end();
}

http.createServer(onRequest).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/ :)');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

// connection.connect();
//
// connection.query('SELECT * from user', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.', err);
// });
//
// connection.end();
