const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Buyer = require('./Buyer')
const Product = require('./Product')


const sellerModel = mongoose.model("Seller", {
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
exports.Seller = sellerModel;
