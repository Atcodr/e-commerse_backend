const cartmodel = require('../model/cartmodel')
const express = require('express')
const cartRouter = express.Router()

cartRouter.post("/addcart", async (req,res)=>{
    try {

        let data = await cartmodel.create(req.body)
        if(data!==null){
            res.json(data)
        }   
    } catch (error) {
        res.json(error.message)
    }
})

module.exports = cartRouter