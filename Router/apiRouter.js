const express = require('express')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const adminRouter = require('./adminRouter')
const { verifyToken, generateToken } = require('../token/tokenManager')
const userModal = require('../model/usermodel')
const apiRouter = express.Router()





apiRouter.post("/login/", async (req, res) => {
    const { email, password } = req.body
    try {
        let response = await userModal.findOne({ email, password })
        if (response) {
            let token = generateToken({ name: response.fullname, id: response._id })
            res.json({ staus: true, data: response, token })
        }else{
            res.json({status:false,msg:"email or password is incorrect"})
        }
    } catch (error) {
        console.log(error);
    }
})


apiRouter.post("/add", async (req, res) => {
    console.log(req.body);
    try {
        const reqdata = await userModal.create(req.body)
        if (reqdata) {
            res.json(reqdata)
        } else {
            res.json({ status:false, data: null })
        }
    } catch (error) {
        console.log(error);
    }
})
apiRouter.use("/user", async (req, res, next) => {
    try {
        let result = await verifyToken(req)
        if (result.status) {
            next()
        } else {
            res.json(result.msg)
        }
    } catch (error) {

    }
})

apiRouter.use("/user", userRouter)

apiRouter.use("/product", productRouter)
apiRouter.use("/admin", async (req, res, next) => {
    try {
        let result = await verifyToken(req)
        if (result.status) {
            next()
        } else {
            res.json(result.msg)
        }
    } catch (error) {

    }
})
apiRouter.use('/admin', adminRouter)
// apiRouter.use('/cart',cartRouter)
// apiRouter.use('/payment',paymentRouter)


module.exports = apiRouter