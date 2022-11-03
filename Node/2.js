// Node.js runs single-threaded, non-blocking, asynchronous programming, 
// which is very memory efficient.

var http = require('http');
// The function passed into the http.createServer() method, 
// will be executed when someone tries to access the computer on port 8080.
http.createServer(function (req, res) {
    // res.writeHead() method is the status code, 200 means that all is OK, 
    // the second argument is an object containing the response headers.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);