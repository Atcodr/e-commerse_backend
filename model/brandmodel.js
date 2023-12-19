const {Schema,model, default: mongoose} = require('mongoose')

const schema = new Schema({
    brand_name :{
        type:String,
        trim:true,
        required : [true,"this feild is require"],
        unique:true,
    },
    image : {
        type : Array,
        default : []
    },
},{timestamps:true})

const BrandModal = model("Brand",schema)

module.exports = BrandModal



