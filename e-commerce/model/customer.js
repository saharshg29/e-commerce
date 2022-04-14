const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types


const customerModel = mongoose.model("Customer", mongoose.Schema({
    name: {
        type: String,
        requierd: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    accountype: {
        type: String,
        required: true
    },
    following: [{
        type: ObjectId,
        ref: "Customer"
    }],
    cart: [{
        type: ObjectId,
        ref: "Product"
    }],
    order: [{
        type: ObjectId,
        ref: "Product"
    }]
}))

module.exports = customerModel