let bycrypt = require('bycrypt')
let models = require('../../models/index')
let validator = require("validatorjs")

async function getMerchant(req, res) {
    try {
        let result = await models.Merchant.findAll({
            attributes: ['id', 'name', 'email'],
            include: {
                association: 'products',
                attributes: ['id', 'name','quantity','price']
            }
        })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getMerchantbyId(req, res) {
    try {
        let result = await models.Merchant.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createMerchant(req, res) {
    try {
        let result = await models.Merchant.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        let createMerchant = await result.update(req.body)
        
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteMerchant(req, res) {
    try {
        let deleteMerchant = await models.Merchant.destroy({ where: { id: req.params.id } })

        res.json({ message: "Merchant deleted", id: req.params.id })
    } catch (errror) {
        res.json(error)
    }
}



module.exports = {
    getMerchant, getMerchantbyId, createMerchant, deleteMerchant
}