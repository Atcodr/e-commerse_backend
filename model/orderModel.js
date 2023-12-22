const {Schema,model,} = require ('mongoose')

const schema = new Schema({
    order_name:{
        type: String,
        reqired: [true,"this field is reqired"],
        trim: true,
        unique: true
    },
    order_quantity:{
        type:Number,
        reqired:[true,"this field is required"],
        validate:{
            validator: (value)=>/^[1-9][0-9]{0,11}$/.test(value),
            message:({value})=>`${value} is not a valid value`
        },

    },
    order_price:{
        type:Number,
        required:[true,"this field is required"],
        min:[2,"two digit required"]
    },



})
const orderModel =model("Order",schema)
module.exports= orderModel