var fs=require('fs')
fs.readFile('demo1.html',function(err,data){
if(err){
return console.error(err);
}
console.log(data);
console.log(data.toString());
});
