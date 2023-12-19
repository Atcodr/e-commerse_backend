const express = require('express')

const userRouter = express.Router()
require('dotenv').config()




userRouter.post("/add", async(req,res)=>{
    console.log(req.body);
   try {
       const {status,reqdata} = await User.save(req.body)
       if(status){
        res.json(reqdata)
       }else{
        res.json({status,data:null})
       }
   } catch (error) {
    console.log(error);
   }
})

userRouter.get('/allusers',async(req,res)=>{
    try {
        const data = await User.list()
        if(data.status){
            res.json(data)
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = userRouter;