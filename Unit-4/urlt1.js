   

 var http = require('http');  
    var url = require('url');  
      
    http.createServer(function (req, res) {  
        
        var queryString = url.parse(req.url, true);  
        console.log(queryString);
console.log("Complete href is :-"+queryString.href); 
 console.log("Host is :-"+queryString.host);  
  
    // Prints the host name   
    console.log("Host name is :-"+queryString.hostname);    
         }).listen(8080); 

//To get Output

//http://localhost:4200/manav 