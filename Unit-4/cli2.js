var http=require('http');
const fetch = require('node-fetch');
fetch('http:/localhost:8080/sample.txt',{
    method:'POST',
    Headers:{'Content-type':'application/json'},
    body:JSON.stringify({"name":"ram","srn":"123456"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))