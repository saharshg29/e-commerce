const express = require('express')
const buyer = require('./Routes/buyer')
const app = express.Router()

app.use('/buyer', buyer)

module.exports = app
