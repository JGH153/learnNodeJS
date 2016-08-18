//pipes

//use streams and asyn whenever avaiable

var fs = require("fs");
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + "/greetBig.txt");

var writable =  fs.createWriteStream(__dirname + '/greetCopy.txt');

var compressed =  fs.createWriteStream(__dirname + '/greetCopy.txt.gz');

var qzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(qzip).pipe(compressed);
