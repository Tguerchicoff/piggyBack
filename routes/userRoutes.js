import {Router} from 'express';
const userRoutes=Router()


userRoutes.get("/", (req, res)=>{
    res.send("get all users");
})

export default userRoutes;