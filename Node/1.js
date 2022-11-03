var http =require('http');
var fs= require('fs');

http.createServer(function(req,res){
    // request and response is from server to client
    fs.readFile('demo1.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data)
        return res;
    })
}).listen(8080);