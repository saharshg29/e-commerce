const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Signin
router.post('', (req, res) => {
    const { username, password, accounttype } = req.body

    if (!username || !password || !accounttype) {
        res.status(400).json({ msg: "Please fill all the fields" })
    }
    else {
        Customer.findOne(({ username: username, accountype: accounttype }))
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

module.exports = router





