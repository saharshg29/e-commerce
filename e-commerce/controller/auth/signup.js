const express = require('express')

const router = express.Router()

router.post('/sign-up', (req, res) => {
    const { name, email, password, username, mobilenumber, accountype } = req.body
    if (!email || !name || !username || !mobilenumber || !accountype) {
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
                                accountype: "buyer"
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