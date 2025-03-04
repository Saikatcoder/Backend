import express from 'express';
import userRouter from './Routers/user.routes.js';
const app =  express();

app.use("/api/v1/users",userRouter);



app.get('/',(req,res)=>{
    res.send("Hellow world!");
});




app.listen(3000,()=>{
    console.log("sever is running on port 3000");
})