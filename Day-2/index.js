const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("Hello i am server ✅")
})

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`server is connected on port number ${PORT}`);
    
})