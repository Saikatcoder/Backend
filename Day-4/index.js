import express from 'express';
const app =  express();


function sayHiMiddleware(req, res, next){
    console.log("Hello i am middleware😁");
    next();
}

app.use(sayHiMiddleware);

app.get('/user', (req, res) => {
    console.log("hello");
})

app.get('/',(req,res)=>{
    res.send("Hellow world!");
});




app.listen(3000,()=>{
    console.log("sever is running on port 3000");
})