var fs=require('fs');
const readerStream=fs.createReadStream("./logo1.txt");
readerStream.on("data",function(chunk){
console.log(chunk.toString());
});
readerStream.on("end",function(){
console.log("Stream is ended");
});
readerStream.on("error",function(err){
console.log("err.stack");
});

