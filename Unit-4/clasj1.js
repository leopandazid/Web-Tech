var fs=require('fs')
fs.appendFile('input3.txt','web-tech class in j section',function(err){
if(err){
return console.error(err);
}
console.log('file is created');
});