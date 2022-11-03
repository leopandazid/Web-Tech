const fs = require("fs");
const readerStream = fs.createReadStream("./data.txt");

readerStream.on("data", function (chunk) {
  console.log(chunk.toString());
});

readerStream.on("end", function () {
  console.log("Stream Ended");
});

readerStream.on("error", function (err) {
  console.log(err.stack);
});