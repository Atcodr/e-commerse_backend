const {Schema,model, default: mongoose} = require('mongoose')

const schema = new Schema({
    cate_name :{
        type:mongoose.Schema.Types.String,
        trim:true,
        required : [true,"this feild is require"],
        unique:true
    },
    image : {
        type : mongoose.Schema.Types.Array,
    },
},{timestamps:true})

const categoryModal = model("category",schema)

module.exports = categoryModal



