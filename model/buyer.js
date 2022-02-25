const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Seller = require('./seller');
const Product = require('./product')


const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    following: [
        {
            type: ObjectId,
            ref: Seller
        }
    ],
    orderHistory: [
        {
            type: ObjectId,
            ref: Product,
        }
    ]
})

const buyerModel = mongoose.model("Buyer", buyerSchema)
exports.Buyer = buyerModel;