const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{

    

    // Download file in a bad way❌
    const file = fs.readFileSync("sample.txt");

    res.end(file);
    res.end("Hello i am server ✅")
})

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`server is connected on port number ${PORT}`);
    
})