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

require('./model/customer')
require('./model/product')

const app = express()

app.get('/', (req, res) => {
    res.send("now working properly")
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})