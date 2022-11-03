/*
const fs=require('fs');
const read=fs.createReadStream("./logo.txt");

read.on("data",function(chunk){
console.log(chunk.toString());
});
read.on("end",function(){
console.log("stream ended")
});
read.on("error",function(err){
console.log(err.stack);
});
*/

const fs=require('fs')
var data="you are learning buffers and streams";
var ws=fs.createWriteStream("ex.txt");
ws.write(data,'UTF-8');
ws.end();

ws.on('finish',function(){
console.log('write is completed');
});

ws.on('err',function(){
console.log(error.stack);
});

console.log('program has ended')