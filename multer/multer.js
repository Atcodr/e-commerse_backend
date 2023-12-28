const multer = require("multer");
const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
      cb(null,"upload")
    },
    filename : (req,file,cb)=>{
      cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
})

const Upload = multer({storage:Storage})

module.exports = Upload;