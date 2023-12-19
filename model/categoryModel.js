const {Schema,model, default: mongoose} = require('mongoose')

const schema = new Schema({
    cate_name :{
        type:String,
        trim:true,
        required : [true,"this feild is require"],
        unique:true
    },
    image : {
        type : Array,
        default :[]
    },
},{timestamps:true})

const categoryModal = model("category",schema)

module.exports = categoryModal



