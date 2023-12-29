const express = require('express');
const userModal = require('../model/usermodel');
const { generateToken } = require('../token/tokenManager');
const Upload = require('../multer/multer');
require('dotenv').config()
const PORT = process.env.PORT || 3000

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



userRouter.put("/upload",Upload.single("image"),async(req,res)=>{
    const id = req.data._id
    const url = `${req.protocol}://${req.hostname}:${PORT}/upload/${req.file.filename}`
    // console.log(url);
    try {
        let data = await userModal.findOneAndUpdate(id,{image:url})
        // old way of uploading image// const data = await userModal.findOneAndUpdate(id,{image:fs.readFileSync(path.join(__dirname + '../../upload/' + req.file.filename))})
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