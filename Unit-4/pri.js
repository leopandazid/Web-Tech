    var http = require('http');  
    var url = require('url');  
      
    http.createServer(function (req, res) {  
        
        var queryString = url.parse(req.url, true);  
        console.log(queryString);  
        
    }).listen(8080);  