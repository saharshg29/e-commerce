const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Buyer = require('./buyer')

const sellerSchema = new mongoose.Schema({
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
    followers: [
        {
            type: ObjectId,
            ref: Buyer
        }
    ],
    Products: [
        {
            type: ObjectId,
            ref: Product,
        }
    ]
})

const sellerModel = mongoose.model("Seller", sellerSchema)
exports.Seller = sellerModel;