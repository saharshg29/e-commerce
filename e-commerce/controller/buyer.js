const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')
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


{
    // router.post('/signin', (req, res) => {
    //     const { email, password } = req.body
    //     console.log("log in deails", req.body)
    //     if (!email || !password) {
    //         console.log('email', email)
    //         return res.json({ error: "email or password is wrong" })
    //     }

    //     User.findOne({ email: email })
    //         .then(savedUser => {
    //             if (!savedUser) {
    //                 res.status(400).json({ err: "User does not exist" })
    //             }
    //             bcrypt.compare(password, savedUser.password)
    //                 .then(doMatch => {
    //                     if (doMatch) {
    //                         const token = jwt.sign({ _id: savedUser._id }, JWT_TOKEN)
    //                         const { _id, name, email, followers, following, pic } = savedUser
    //                         res.json({ token, user: { _id, name, email, followers, following } })
    //                     }
    //                     else {
    //                         return res.status(422).json({ error: "Invalid Email or passwoord" })
    //                     }
    //                 })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // })
}


// router.delete()

module.exports = router