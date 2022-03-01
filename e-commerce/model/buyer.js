const mongoose = require('mongoose')

mongoose.model("Customer", mongoose.Schema({
    name: {
        type: String,
        requierd: true
    },
    email: {
        type: String,
        required: true
    }
}))