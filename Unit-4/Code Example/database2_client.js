var http=require('http');
/*var options={
    host:'localhost',
    port:'8080'
  }
var callback=function(response){
    var body='';
    response.on('data', function(data){
        body+=data;
    })
    response.on('end',function(){
        console.log(body);
    })
}

var req=http.request(options,callback);
req.end();
*/
var fetch=require('node-fetch')
fetch('http://localhost:8080/?dept=cse&Hostel=Yes')
.then((res)=>res.text())
.then((text)=>console.log(text))
