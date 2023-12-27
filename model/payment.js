const { Schema,model, Schema, } = require("mongoose");

const schema = new Schema({
    transaction_id:{
        type:Number,
        required:[true,"this field is required"],
},
      payment:{
        type:Number,
        required: [true,"this field is required"],

      },
      payment_mode:{
        type:String,
        required: [true,"this field is required"],

      },
      



})