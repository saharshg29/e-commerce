const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Product = require('../model/product')
const auth = require('./middlewares/require')

router.post('/add', (req, res) => {
    const {name, price, photo, description} = req.body
    if (!name || !price || !photo || !description) {
        return res.status(422).json({error: "Please add all the fields"})
    }
    const product = new Product({
        name,
        price,
        photo,
        description
    })

    product.save()
    .then(result => {
        res.status(200).json({result})
    })
    .catch(err => {
        console.log(err._message)
    })
})

router.get('/myitem', (req, res) => {
    Product.find({})
})