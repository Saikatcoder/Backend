import express from 'express';
import publicRouter from './routes/publicRoute.js';
import privaterouter from './routes/privateRoute.js';
import fs from  "fs";
import path from "path";
import { fileURLToPath } from "url";
import logMiddleware from './middleware/logs.middleware.js';


const app = express();
const PORT = 8000;



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  // acess the node path

if(!fs.existsSync(path.join(__dirname, "logs"))){
    fs.mkdirSync(path.join(__dirname, "logs"))
}
// *Inbuid Middleware *
app.use(express.json());

// !Global Custom Middleware*
app.use(logMiddleware)

// ?Middleware to routes
app.use("/public",publicRouter)
app.use('/private', privaterouter)
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
    
})