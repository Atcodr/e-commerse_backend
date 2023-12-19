const express = require('express')
const categoryModal = require('../model/categoryModel')
const adminRouter = express.Router()

// adminRouter.use('/payment',paymentRouter)

adminRouter.post("/addcategory", async (req,res)=>{
    try {

        let data = await categoryModal.create(req.body)
        if(data!==null){
            res.json(data)
        }
    } catch (error) {
        res.json(error.message)
    }
})



module.exports = adminRouter