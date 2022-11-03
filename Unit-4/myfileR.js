var fs = require("fs");
 
// Asynchronous read
fs.readFile('demo1.html', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});