const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signin', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json({ msg: "Please fill all the fields" })
    }
    else {
        Customer.findOne({ username: username })
            .then(user => {
                if (!user) {
                    res.status(400).json({ msg: "User does not found" })
                }
                else {
                    bcrypt.compare(password, user.password)
                        .then(matched => {
                            if (matched) {
                                const token = jwt.sign({ _id: user._id }, "tokyo@json")
                                const { _id, name, email, username } = user
                                res.json({ token, student: { _id, name, email, username } })
                            }
                            else {
                                return res.status(422).json({ error: "Login failed due to incorrect email or passwprd" })
                            }

                        })
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
})

module.exports = router