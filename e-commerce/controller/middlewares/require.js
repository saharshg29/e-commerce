const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Customer = mongoose.model("Customer")

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "You must be loged in" })
    }
    const token = authorization
    jwt.verify(token, "tokyo@json", (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be authorized" })
        }

        const { _id } = payload
        User.findById(_id)
            .then(userData => {
                req.user = userData
                next()
            })
    })
}