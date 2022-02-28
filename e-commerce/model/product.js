const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Buyer = require('./buyer')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    mobile: {
        type: Number,
        required: true
    },
    buyers: [
        {
            type: ObjectId,
            ref: Buyer
        }
    ]
})

const productModel = mongoose.model("Product", productSchema)
exports.Product = productModel;
