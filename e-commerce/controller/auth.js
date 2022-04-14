const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Signin
router.post('/signin', (req, res) => {
    const { username, password, accountype } = req.body

    if (!username || !password || !accountype) {
        res.status(400).json({ msg: "Please fill all the fields" })
    }
    else {
        Customer.findOne(({ username: username, accountype: accountype }))
            .then((user) => {
                if (!user) {
                    res.status(400).json({ msg: "User does not found" })
                }
                else {
                    console.log(user)
                    bcrypt.compare(password, user.password, (err, ress) => {
                        if (err) {
                            res.json({ err })
                        }
                        if (ress) {
                            const token = jwt.sign({ _id: user._id }, "tokyo@json")
                            const { _id, name, email, username } = user
                            res.json({ token: token, user: { _id, name, email, username } })
                        }
                        else {
                            return response.json({ success: false, message: 'passwords do not match' });
                        }
                    })

                }
            })

            .catch(err => {
                console.error(err)
            })

    }
})


//SIGN-UP
router.post('/signup', (req, res) => {
    const { name, email, password, username, mobilenumber, accountype } = req.body
    if (!email || !name || !username || !mobilenumber || !accountype) {
        return res.json({ error: "Please fill up all the fields" })
    }
    else {
        Customer.findById((email || username))
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
                                accountype
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

module.exports = router





