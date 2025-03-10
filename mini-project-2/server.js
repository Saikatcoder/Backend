import express from "express";
import session from "express-session";

const app = express()

// session middle ware form middleware
app.use(session(
    {
        secret: "mysecret",
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:1000*60*60*24  // 1 day
        }
    }
))

app.get("/", (req,res)=>{
    console.log(req.session)
    console.log(req.session.id)
    res.send("hellow sir")
})


app.listen(3000,()=>{
    console.log("server is runing"+ 3000);
    
})