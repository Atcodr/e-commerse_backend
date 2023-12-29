const express = require ('express')
const productModel = require('../model/productmodel')
const productRouter = express.Router()

productRouter.get("/getallproducts", async(req,res)=>{
    try {
        const data = await productModel.find().populate("adder").populate("category")
        if(data!==null){
            res.json({status:true,data,msg:"success"})
        }
    } catch (error) {
        res.json(error.message)
    }

})

module.exports = productRouter;