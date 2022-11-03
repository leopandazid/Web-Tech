// node program to demonstrate the 
// url.pathname API as Setter 
   
//importing the module 'url'
const http = require('url');
   
// creating and initializing myURL
const myURL = new URL('https://example.com:80/foo#ram');
   
// Display the href
// value of myURL before change
console.log("Before Change");
console.log(myURL.href);
   
// assigning pathname portion
// using pathname API
console.log();
myURL.pathname = '/abcdef';
   
// Display href 
// value of myURL after change
console.log("After Change");
console.log(myURL.href);