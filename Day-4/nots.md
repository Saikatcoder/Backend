### **Example 1. Authencation Middleware**
### **Use Case. Verify if a user is authenticated before accessing specific routes**

``javascript 
const express = require('express');
const app = express();

function is authencation(req,res,next){
    const token = req.headers['authorization']
    if(token === 'valid-token'){
        console.log('user authauthorized)
    }else{
        res.status(401).send('unauthorized: token is invalid');
    }
}

app.get('/' , authencation,(req,res)=>{
    res.send('welcome to your dashbord')
})

app.get ('/dashbord', (req,res)=>{
    res.send('This is public route)
})


## **Example 2. Login middleware**
##  **Use Case.**


function loginMiddleware(req,res,next){
    const method = req.method;
    const url = req.url;
    console.log(`[${new Date().toIsstring()}] ${method} requst to ${url}`);
    next();
}

app.use(loginMiddleware);


