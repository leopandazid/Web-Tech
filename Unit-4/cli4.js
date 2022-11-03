var http=require('http');
var url=require('url')
var fs=require('fs');
var qs=require('querystring')
var MongoClient= require('mongodb').MongoClient;
http.createServer(function(request,response){
    if(request.method=='POST'){
        var myurl=url.parse(request.url);
        var query=myurl.query;
        var qobj=qs.parse(query);
        let body=[];
        request.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk.toString())
        })
        .on('end',()=>{
            body=Buffer.concat(body).toString();
            console.log(body);
        })
        var url1='mongodb://localhost:27017'
        MongoClient.connect(url1, function(err,client){
            if(err)throw err;
            const db=client.db('newdb');
            db.collection('student').insertOne(JSON.parse(body),
                  function(err,res){
                    if(err) throw err;
                    console.log("1 document is inserted")
                    response.write("1 document is inserted");
                    client.close();
                    response.end();                     
                })
        })
    }   
}).listen(8080);
console.log("Server is up and running");