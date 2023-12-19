const mongoose = require('mongoose')
require('dotenv')
const {URI,DB_NAME} = process.env


function Dbcon(){
  return new Promise(async(resolve,reject)=>{
    try{
     let conn = await mongoose.connect(URI)
      if(conn){
      resolve({status:true,msg:"successfully connect to db"})
      }else{
        resolve({status:false})
      }
    }catch(error){
      console.log(error);
    }
  

  })
}

module.exports = Dbcon;