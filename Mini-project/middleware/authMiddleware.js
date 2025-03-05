import { validateToken } from "../utils/tokenutils.js";
const authMiddleware = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(token && validateToken(token)){
        req.user = {name : "Saikat" , id: 1};
        next()
    }
    else{
        res.status(404).send("unauthorized: invalid token");
    }
}



export default authMiddleware;