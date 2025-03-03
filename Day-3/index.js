import express from 'express';
import data from "./data/data.js";
const app = express();

const PORT = 8000;
app.get('/',(req,res)=>{
    res.status(200).send("hello sir🙊")
})

// Industry standards
app.get("api/v1/users",(req,res)=>{
    res.status(200).send(data)
})
app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`);
});

