const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')
const Product = mongoose.model('Product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//USER SIGNUP --
router.post('/add', (req, res) => {
    const { name, email, password, username, mobilenumber, accountype } = req.body
    if (!email || !name || !username || !mobilenumber) {
        return res.json({ error: "Please fill up all the fields" })
    }
    else {
        Customer.findById((email || username) && accountype)
            .then(savedUser => {
                if (savedUser) {
                    return res.json({ error: "User already exist" })
                }
                else {
                    bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const customer = new Customer({
                                name,
                                email,
                                password: hashedPassword,
                                username,
                                mobilenumber,
                                accountype: "seller"
                            })
                            customer.save()
                                .then(user => {
                                    res.status(200).json({ user })
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        })
                }
            }).catch(err => {
                console.log(err)
            })
    }
})

// GET A PARTICULAR Seller
router.get('/:id', (req, res) => {
    Customer.findOne({ _id: req.params.id } && { accountype: "seller" })
        .then(user => {
            if (user) {
                res.status(200).json(user)
            }
            else {
                res.status(404).send("user not found")
            }
        })
        .catch(err => {
            console.log(err)
        })
})

// GET EDITING USER PROFILE
router.put('/edit/:id', (req, res) => {
    const id = req.params.id
    const { name, email, password, username, mobilenumber } = req.body
    Customer.findByIdAndUpdate(
        { _id: id },
        {
            $set: {
                name, email, password, username, mobilenumber
            }
        },
        { new: true }
    )
        .then(updated => {
            res.status(200).json({ updated })
        })
        .catch(err => {
            console.log(err)
        })

})

module.exports = router