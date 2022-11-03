var fetch=require('node-fetch')
fetch('http://localhost:8080/sample1.txt',{
    method:'POST',
    headers:{'Content-type':'application/json'},
    //body:JSON.stringify({"name":"Ram","srn":"78"})
})
.then((res)=>res.text())
.then((text)=>console.log(text))
