const express = require('express');
const userModal = require('../model/usermodel');
const { generateToken } = require('../token/tokenManager');
const Upload = require('../multer/multer');

const userRouter = express.Router()
require('dotenv').config()



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



userRouter.put("/upload",Upload.single("upload"),(req,res)=>{
    const upload = req.body
    const id = req.data._id
    try {
        const data = userModal.findByIdAndUpdate(id,{image:upload})
        if(data){
            res.json(data)
        }else{
            res.json({status:false,msg:"not found"})
        }
    } catch (error) {
        console.log(error.message)
    }
})


module.exports = userRouter;