var fs= require('fs')
console.log("Going to open file");
fs.open('demo1.html', 'r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    var buf=Buffer.alloc(1024);
    console.log("file Opened Sucessfully")
    console.log("Going to truncate file after 3 bytes")
fs.ftruncate(fd,300, function(err){
    if(err){
        console.log(err);
    }

    console.log("File truncated sucessfully");
    console.log("Going to read the same file");
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if (err) throw err;
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
        fs.close(fd,function(err){
            if(err) throw err
        })
    })
})
})
