// Pure JavaScript is great with Unicode encoded strings, but it does 
// not handle binary data very well. It is not problematic when we perform an 
// operation on data at browser level but at the time of dealing with TCP stream 
// and performing a read-write operation on the file system is required to deal 
// with pure binary data. To satisfy this need Node.js use Buffer, So in this 
// article, we are going to know about buffer in Node.js.

// Buffers in Node.js: The Buffer class in Node.js is used to perform operations 
// on raw binary data. Generally, Buffer refers to the particular memory location in 
// memory. Buffer and array have some similarities, but the difference is array 
// can be any type, and it can be resizable. Buffers only deal with binary data, 
// and it can not be resizable. Each integer in a buffer represents a byte. 
// console.log() function is used to print the Buffer instance.

// Methods to perform the operations on Buffer:

// No	Method	Description
// 1	Buffer.alloc(size)	It creates a buffer and allocates size to it.
// 2	Buffer.from(initialization)	It initializes the buffer with given data.
// 3	Buffer.write(data)	It writes the data on the buffer.
// 4	toString()	It read data from the buffer and returned it.
// 5	Buffer.isBuffer(object)	It checks whether the object is a buffer or not.
// 6	Buffer.length	It returns the length of the buffer.
// 7	Buffer.copy(buffer,subsection size)	It copies data from one buffer to another.
// 8	Buffer.slice(start, end=buffer.length)	It returns the subsection of data stored in a buffer.
// 9	Buffer.concat([buffer,buffer])	It concatenates two buffers.

// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = new Buffer('GFG');
var buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Happy Learning");

// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

var Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
var bufferOld = new Buffer('GeeksForGeeks');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
var bufferOne = new Buffer('Happy Learning ');
var bufferTwo = new Buffer('With GFG');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());

/*
Out


Happy Learning
true
100
ABC
Geek
Happy Learning With GFG
*/