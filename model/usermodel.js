const {Schema,model, default: mongoose} = require('mongoose')

const schema = new Schema({
    name :{
        type:mongoose.Schema.Types.String,
        trim:true,
        required : [true,"this feild is require"],
        unique:true
    },
    image : {
        type : mongoose.Schema.Types.Array,
    },
},{timestamps:true})

const Modal = model("User",schema)

module.exports = Modal



