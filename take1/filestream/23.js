var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/greetBig.txt",
{encoding: 'utf8', highWaterMark: 32 * 1024});

var writable =  fs.createWriteStream(__dirname + '/greetCopy.txt')

readable.on('data', function(chunk){
	console.log("chunk.length: " + chunk.length)
	writable.write(chunk);
})
