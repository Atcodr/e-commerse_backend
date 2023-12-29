const express = require('express')
const categoryModal = require('../model/categoryModel')
const productModel = require('../model/productmodel')
const orderModel = require('../model/orderModel')
const Upload = require('../multer/multer')
const adminRouter = express.Router()
require('dotenv').config()
const PORT = process.env.PORT ||3000
                                
// adminRouter.use('/payment',paymentRouter)
adminRouter.get('/',(req,res)=>{
    res.json("hello")
})

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
adminRouter.post("/addproduct",Upload.single("image"), async (req,res)=>{
       const {prod_name,price,discount_price,prod_specification,prod_discription,totalprod_quantity,prod_color,category} = req.body
       const url = `${req.protocol}://${req.hostname}:${PORT}/upload/${req.file.filename}`
       const id = req.data.id
    try {
        let data = await productModel.create({
            prod_name,
            price,
            discount_price,
            prod_specification,
            prod_discription,
            totalprod_quantity,
            prod_color,
            category,
            image:url,
            adder : id
        })
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