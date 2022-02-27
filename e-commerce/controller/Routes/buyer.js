const express = require('express')
const mongoose = require('mongoose')
const Buyer = mongoose.model("Buyer")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "giving all the fiels is necessary" })
    }
    else {
        Buyer.findOne({ email: email })
            .then((savedBuyer) => {
                if (savedBuyer) {
                    return res.status(422).json({ error: 'Student already exist' })
                }
                else {
                    bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const buyer = new Buyer({
                                email,
                                password: hashedPassword,
                                name
                            })
                            buyer.save()
                                .then(buyer => {
                                    res.status(200).json({buyer})
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

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    console.log("log in deails", req.body)
    if (!email || !password) {
        console.log('email', email)
        return res.json({ error: "email or password is wrong" })
    }

    Buyer.findOne({ email: email })
        .then(savedBuyer => {
            if (!savedBuyer) {
                res.status(400).json({ err: "User does not exist" })
            }
            bcrypt.compare(password, savedBuyer.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedBuyer._id }, 'JWT_TOKEN')
                        const { _id, name, email } = savedBuyer
                        res.json({ token, student: { _id, name, email } })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or passwoord" })
                    }
                })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router