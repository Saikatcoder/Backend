import {  Router } from "express";

const userRouter = Router();


userRouter.get('/create-user', (req, res) => {
    res.send("Hello from users!✅");
});

userRouter.get('/getAllUser',(req,res)=>{
    res.send("get all users");
})


export default userRouter;