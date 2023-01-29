let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')
let models = require('../../models/index')


async function login(req, res) {
    try {
    let result = models.merchant.findOne({ where: { email: req.body.email } })
    if (result.length < 1) {
        res.send("Merchant not found!")
    }

    let password = req.body.password;
    let match = await bcrypt.compare(password, result.password);
    if (!match) {
        res.send("Email and Password are not recognized!");
    }

    let payload = {
        id: result.id,
        name: result.name,
        email: result.email
    }

    let token = jwt.sign(payload, 'secret')

    res.json({ message: "Login success!", access_token: token })
} catch (error) {
        res.json(error)
    }
} 


module.exports = {
    login
}

