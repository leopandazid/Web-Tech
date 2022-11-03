var fs=require('fs')
fs.appendFile('input1.txt','it is web-tech class in CSE',function(err){
if(err){
return console.error(err);
}
console.log('file is created');
});