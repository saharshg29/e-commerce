const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

module.exports = mongoose.model("Product", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: [{
        type: ObjectID,
        ref: "Customer"
    }],
    description: {
        type: String,
        required: true
    },
    likes: [
        {
            type: ObjectID,
            ref: "Customer"
        }
    ],
    orders: [
        {
            type: ObjectID,
            ref: "Customer"
        }
    ],
}))