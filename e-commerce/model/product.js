const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

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
        type: ObjectId,
        ref: "Customer"
    }],
    description: {
        type: String,
        required: true
    },
    likes: [
        {
            type: ObjectId,
            ref: "Customer"
        }
    ],
    orders: [
        {
            type: ObjectId,
            ref: "Customer"
        }
    ],
}))