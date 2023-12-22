const express = require('express')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const adminRouter = require('./adminRouter')
const { verifyToken } = require('../token/tokenManager')
const apiRouter = express.Router()

apiRouter.use("/user",userRouter)
apiRouter.use("/product",productRouter)
apiRouter.use("/admin", async (req,res,next)=>{
    try {
        let result = await verifyToken(req)
        if(result.status){
            next()
        }else{
            res.json(result.msg)
        }
    } catch (error) {
       
    }
})
apiRouter.use('/admin',adminRouter)
// apiRouter.use('/cart',cartRouter)
// apiRouter.use('/payment',paymentRouter)


module.exports = apiRouter