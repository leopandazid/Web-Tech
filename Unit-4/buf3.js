const buf1=Buffer.alloc(10,'Hi Welcome')
const buf2=Buffer.alloc(17,'to pes university')
console.log("Buffer1",buf1.toString());
console.log("Buffer2",buf2.toString());
const total=buf1.length+buf2.length;
console.log(total);
const buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
console.log(buf3.length);