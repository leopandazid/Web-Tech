// Precedence
// 1.link
// 2.append
// 3.write
// 4.read

var fs =require ("fs")

// Reading a file
fs.readFile("fname.txt",function(err,data){
    if (err) {
        return console.error(err)
    }
    console.log(data.toString())
})

// Writing a file
fs.writeFile("fname.txt","PESU",function(err){
    if (err) {
        // return console.error(err)
        throw error
    }
    console.log("Data Written")
})

// Appending a file
fs.appendFile("fname.txt","\nWHAT",function(err){
    if (err) {
        // return console.error(err)
        throw error
    }
    console.log("Data Appended")
})

// Unlink a File
var fs = require("fs")
fs.unlink("fname.txt",function () {
    console.log("Unlink Complete")
})