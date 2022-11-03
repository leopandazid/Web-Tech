const fs = require("fs");

const reader = fs.createReadStream("./data.txt");
const writer = fs.createWriteStream("./logo.txt");

reader.pipe(writer);

console.log("Piping ended");
