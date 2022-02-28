const express = require('express')
const mongoose = require('mongoose')

const app = express.Router()

app.get('/', (req, res) => {
    res.send('seller is working good')
})

module.exports = app