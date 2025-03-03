const http = require('http')

const fs = require('fs');

const server = http.createServer((req,res)=>{

    // download file in good way✅\
    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res);
    // // res.end()


    // download file in bad way��\



    // download file in good way (stream)
    const readStrem = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");

    readStrem.on("data", (chunk)=>{
        console.log("CHUNK" , chunk);
        writeStream.write(chunk);
    })
});

server.listen(8000 , ()=>{
    console.log(`server listening on ${8000}`);
    
})