const multer = require("multer");
const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
      cb(null,"upload")
    },
    filename : (req,file,cb)=>{
     cb(null,`${Date.now()}${file.fieldname}.jpg`)
    }
})

const Upload = multer({storage:Storage})

module.exports = Upload;