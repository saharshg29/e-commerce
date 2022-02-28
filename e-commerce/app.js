const express = require('express')
const mongoose = require('mongoose')
const DB = require('./KEY')

const URI = DB.URI

mongoose.connect(URI)
    .then(() => {
        console.log('Conneection with mongo Db established')
    })
    .catch(err => {
        console.log(err)
    })

const app = express();



app.get('/', (req, res) => {
    res.send('connected')
})

app.listen(5000, () => {
    console.log('working')
})