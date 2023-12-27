const express = require('express')
require('dotenv').config()
const cors = require("cors")
const apiRouter = require('./Router/apiRouter')
const Dbcon = require('./db/connectDB')
const port = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use("/api",apiRouter)


app.listen(port ,async (err)=>{
  let msg =  await Dbcon()
  if(msg.status){
    console.log(msg.msg);
  }
if(err){
    console.log(err.message);
}
console.log(`http://localhost:${port}`);
})
