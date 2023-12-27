const {Schema,model, default: mongoose} = require('mongoose')

const schema = new Schema({
    fullname :{
        type:String,
        trim:true,
        required : [true,"this feild is require"],
    },
    image : {
        type : String,
    },
    mobile :{
        type:Number,
        required : [true,"this feild is require"],
        unique:true,
        validate : {
            validator : (value)=>/[0-9]/.test(value),
            message : ({value})=>`${value} is not a valid number`,
            max:[10,"please enter 10 digit number"]
        }
        
    },
    email :{
        type:String,
        trim:true,
        required : [true,"this feild is require"],
        unique:true,
        validate:{
           validator :(value)=>/[\s.@/]/.test(value),
           message : ({value})=>`${value} is not a valid email id`
        }
    },
    password :{
        type:String,
        trim:true,
        required : [true,"this feild is require"],
    },
    address :{
        type:String,
        trim:true,
        default : ""
    },
    isActive :{
        type:Boolean,
        default : true
    },
    cart_items : {
        type : mongoose.Schema.Types.Array,
        default : []
    },
    orders : {
        type:mongoose.Schema.Types.Array,
         default : []
    }
},{timestamps:true})

const userModal = model("User",schema)

module.exports = userModal



