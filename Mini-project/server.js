import express from 'express';

const app = express();
const PORT = 8000;


app.get('/',(req,res)=>{
    res.send("Hellow world!");
})


app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
    
})