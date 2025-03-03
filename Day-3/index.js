import express from 'express';
import Userdata from "./data/data.js";
const app = express();

const PORT = 8000;
app.get("/",(req,res)=>{
    res.status(200).send("hello sir🙊")
})

// // Industry standards
// app.get("/api/v1/users",(req,res)=>{
//     const name = req.query;
//     if(name){
//         const users = data.filter((users)=>{
//             return users.name === name;
//         })
//         res.status(200).send(users)
//     }
//     req.status(200).send(data)
// })

app.get("/api/v1/users/:id",(req,res)=>{
    const {id} = req.params;

    const porsedId = parseInt(id);

    const user = Userdata.find((user)=>{
        return user.id === porsedId;
    })
    res.status(200).send(user);
})


app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port ${PORT}`);
});

