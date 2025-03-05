import { Router } from "express";

const privaterouter = Router();

// dashbord
privaterouter.get("/dashbord", (req,res)=>{
    res.status(200).send({
        message: 'Welcome to Dashbord Page',
        accesstoken: req.headers.accesstoken
    });
})

export default privaterouter;