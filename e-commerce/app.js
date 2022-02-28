const express = require('express')
const mongoose = require('mongoose')
const DB = require('./KEY')
const URI = DB.URI

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Connected to mongoose')
})
mongoose.connection.on('error', (err) => {
    console.log('Error while connecting', err)
})

require('./model/Buyer')
require('./model/Product')
require('./model/Seller')


const app = express();



app.get('/', (req, res) => {
    res.send('connected')
})

app.listen(5000, () => {
    console.log('working')
})