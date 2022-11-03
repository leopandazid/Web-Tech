var http=require('http');
var fetch=require('node-fetch')
fetch('http:/localhost:8080/sample.txt',{
    method:'POST',
    Headers:{'Content-type':'application/json'},
    body:JSON.stringify({"name":"Raj","srn":"12345"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))