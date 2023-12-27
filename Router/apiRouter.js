const express = require('express')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const adminRouter = require('./adminRouter')
const cartRouter = require('./cartRouter')
const apiRouter = express.Router()

apiRouter.use("/user",userRouter)
apiRouter.use("/product",productRouter)
apiRouter.use('/admin',adminRouter)
apiRouter.use("/cart",cartRouter)
// apiRouter.use('/payment',paymentRouter)


module.exports = apiRouter