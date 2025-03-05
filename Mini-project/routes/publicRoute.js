import { Router } from "express";




const publicRouter = Router();



// Generate token
publicRouter.get("/generate-token", (req, res)=>{
    const token = "token";

    res.status(200).send({
        message: "Token generated",
        token: token
    })
})

publicRouter.get("/", (req, res)=>{
    res.status(200).send({
        message: "welcome to home page",
    })
})

export default publicRouter;



