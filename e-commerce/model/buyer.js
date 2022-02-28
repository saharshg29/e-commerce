const mongoose = require('mongoose')
const Seller = require('./Seller');
const Product = require('./Product')



let buyerModel = mongoose.model("Buyer", {
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
            type: String,
            ref: Seller
        }
    ],
    orderHistory: [
        {
            type: String,
            ref: Product,
        }
    ]
})
exports.Buyer = buyerModel;
