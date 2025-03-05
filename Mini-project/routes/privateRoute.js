import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const privaterouter = Router();

// dashbord
privaterouter.get("/dashbord",authMiddleware, (req,res)=>{
    res.status(200).send({
        message: `welcome to dashbord ${req.user.name}`
    });
})

export default privaterouter;