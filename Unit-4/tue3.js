// Node.js program to demonstrate the 
// new URL() method 
  
// Using require to access url module 
const url = require('url');
  
const newUrl = new URL(
    'https://geeksforgeeks.org/p/a/t/h?query=string#hash');
  
// url array in JSON Format
console.log(newUrl);
  
const myUR = url.parse(
    'https://geeksforgeeks.org/:3000/p/a/t/h?query=string#hash');
console.log(myUR);