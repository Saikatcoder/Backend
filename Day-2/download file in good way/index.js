const http = require('http')

const fs = require('fs');

const server = http.createServer((req,res)=>{

    // download file in good way✅\
    const readableStream = fs.createReadStream("sample.txt");
    readableStream.pipe(res);
    // res.end()
});

server.listen(8000 , ()=>{
    console.log(`server listening on ${8000}`);
    
})