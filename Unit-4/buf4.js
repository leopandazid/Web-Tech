const buf1=Buffer.alloc(20);
buf1.write("Happy Learning");
console.log(buf1);
console.log("buf1:",buf1.toString());
const buf2=Buffer.alloc(14,'PES University')
console.log("buf2:",buf2.toString());
total=buf1.length+buf2.length;
console.log(total);
const buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
console.log(buf3.length);
