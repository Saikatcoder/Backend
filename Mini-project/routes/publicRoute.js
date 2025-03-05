import { Router } from "express";
import { generateToken } from "../utils/tokenutils.js";




const publicRouter = Router();



// Generate token
publicRouter.get("/generate-token", (req, res)=>{
    const token = generateToken();

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



