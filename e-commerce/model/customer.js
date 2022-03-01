const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')

const customerModel =  mongoose.model("Customer", mongoose.Schema({
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
        type: ObjectID,
        ref: "Customer"
    }],
    cart : [{
        type: ObjectID,
        ref: "Product"
    }],
    order : [{
        type: ObjectID,
        ref: "Product"
    }]
}))

module.exports = customerModel