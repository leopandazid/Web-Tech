var fs = require("fs");
 
// Synchronous read
var data = fs.readFileSync('demo1.html');
console.log("Synchronous read: " + data.toString());