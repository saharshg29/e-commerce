const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const URI = require('./Key')



mongoose.connect(URI.URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.error(err)
    })

// INITIALISING MODELS
require('./model/customer')
require('./model/product')

// CALLING API ROUTES
const buyer = require('./controller/buyer')
const seller = require('./controller/seller')
// const login = require('./controller/login')


const app = express()
app.use(express.json())


app.use('/buyer', buyer)
app.use('/seller', seller)
app.use(require('./controller/auth'))


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})