import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// *Handles Es module __dirname and _filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  // acess the node path


// *Middleware to log all requests

const logMiddleware = (req, res, next )=>{
    const log = `[${new Date().toISOString()}]${req.method} ${req.url}\n`
    const logFile = path.join(__dirname, "../logs/request.log")
    fs.appendFile(logFile,log,(err)=>{
        if(err)console.error(`Failed to log request `, err)
    })
    next()
}

export default logMiddleware;