const express = require('express')
const categoryModal = require('../model/categoryModel')
const productModel = require('../model/productmodel')
const orderModel = require('../model/ordermodel')
const adminRouter = express.Router()

// adminRouter.use('/payment',paymentRouter)

adminRouter.post("/addcategory", async (req,res)=>{
    const {cate_name} = req.body
    try {

        let data = await categoryModal.create({cate_name})
        if(data!==null){
            res.json(data)
        }
    } catch (error) {
        res.json(error.message)
    }
})

adminRouter.post("/addbrand", async (req,res)=>{
    const {brand_name} = req.body
    try {
        let data = await categoryModal.create({brand_name})
        if(data!==null){
            res.json(data)
        }
    } catch (error) {
        res.json(error.message)
    }
})

// get all categories
adminRouter.get("/getall", async (req,res)=>{
    try {

        let data = await categoryModal.find()
        if(data!==null){
            res.json(data)
        }
    } catch (error) {
        res.json(error.message)
    }
})
// add product
adminRouter.post("/addproduct", async (req,res)=>{

    try {
        let data = await productModel.create(req.body)
        if(data!==null){
            res.json(data)
        }
    } catch (error) {
        res.json(error.message)
    }
})
// add order api
adminRouter.post("/addorder",async(req,res)=>{
    try {
        let data = await orderModel.create(req.body)
        if(data!==null){
            res.json(data)
        }
    } catch (error) {
        res.json(error.message)
    }
})


module.exports = adminRouter