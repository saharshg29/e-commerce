const express = require('express')
const mongoose = require('mongoose')
const URI = require('./KEY')

const app = express()
const PORT = process.env.PORT || 5000;

const DB = URI.URI

mongoose.connect(DB)
    .then(() => {
        console.log('Conneection with mongo Db established')
    })
    .catch(err => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send('Server is working')
})

app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`)
})