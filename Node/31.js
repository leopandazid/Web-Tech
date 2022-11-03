/*
Streams are one of the fundamental concepts of Node.js. Streams are a type of 
data-handling methods and are used to read or write input into output sequentially. 
Streams are used to handle reading/writing files or exchanging information in an efficient 
way.

The official Node.js documentation defines streams as “A stream is an abstract interface 
for working with streaming data in Node.js.” The stream module provides an API for 
implementing the stream interface. Examples of the stream object in Node.js can be a 
request to an HTTP server and process.stdout are both stream instances. In short, Streams 
are objects in Node.js that lets the user read data from a source or write data to a 
destination in a continuous manner.

Accessing Streams:

const stream = require('stream');
Note: What makes streams powerful while dealing with large amounts of data is that instead of reading a file into memory all at once, streams actually read chunks of data, processing its content data without keeping it all in memory.

Advantages of Streams over other data handling methods:

Time Efficient: We don’t have to wait until entire file has been transmitted. We can start processing data as soon as we have it.
Memory Efficient: We don’t have to load huge amount of data in memory before we start processing.
Types of Streams in Node.js: There are namely four types of streams in Node.js.

Writable: We can write data to these streams. Example: fs.createWriteStream().
Readable: We can read data from these streams. Example: fs.createReadStream().
Duplex: Streams that are both, Writable as well as Readable. Example: net.socket.
Transform: Streams that can modify or transform the data as it is written and read. Example: zlib.createDeflate.
Some Node APIs that uses streams are:

net.Socket()
process.stdin()
process.stdout()
process.stderr()
fs.createReadStream()
fs.createWriteStream()
net.connect()
http.request()
zlib.createGzip()
zlib.createGunzip()
zlib.createDeflate()
zlib.createInflate()
Implementing a Readable Stream: We will read the data from inStream and echoing it to the standard output using process.stdout.
*/

// Sample JavaScript Code for creating
// a Readable Stream
// Accessing streams
const { Readable } = require('stream');

// Reading the data
const inStream = new Readable({
	read() { }
});

// Pushing the data to the stream
inStream.push('GeeksForGeeks : ');
inStream.push(
	'A Computer Science portal for Geeks');

// Indicates that no more data is
// left in the stream
inStream.push(null);

// Echoing data to the standard output
inStream.pipe(process.stdout);

// GeeksForGeeks : A Computer Science portal for Geeks 