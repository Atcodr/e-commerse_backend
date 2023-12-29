const { Schema, model, default: mongoose } = require('mongoose')

const schema = new Schema({
    prod_name: {
        type: String,
        trim: true,
        required: [true, "this feild is require"],
        unique: true
    },
    image: {
        type: Array,
        default: ""
    },
    price: {
        type: Number,
        required: [true, "this field is required"],

        min: [3, "minimum three digit required"]
    },
    discount_price: {
        type: Number,
        default: "",

        min: [2, "minimum two digit required"]
    },
    prod_specification: {
        type: Object,
        required: [true, "this feild is require"],
    },
    prod_discription: {
        type: String,
        trim: true,
        required: [true, "this field is required"]

    },
    totalprod_quantity: {
        type: Number,
        validate: {
            validator: (value) => /^[1-9][0-9]{0,11}$/.test(value),
            message: ({ value }) => `${value} is not a valid value`

        },
        required: [true, "this field is required"]

    },
    prod_rating: {
        // required:[true,"this field is reqired"],
        type: Array,
        default: []
    },
    prod_size: {
        type: Number,
        default: ""
    },
    prod_offer: {
        type: Number,
        default: ""
    },
    prod_color: {
        type: String,

    },
    adder: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    barnd: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "brand"
    }
}, { timestamps: true })

const productModel = model("Product", schema)

module.exports = productModel

