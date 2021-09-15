const Purchase = require('../models/Purchase')
const utils = require('../utils/string')

exports.all = async (req,res) => {
    try {
        const {limit,page} = {
            limit: req.query.limit || 10,
            page: req.query.page || 1
        }
        const query = utils.setStringToJson(req.query.query)
        const purchases = await Purchase.paginate(
            query
        ,{
            limit,
            page
        })
        return res.json(purchases)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const purchase = new Purchase(req.body)
        await purchase.save()
        return res.json(purchase)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const purchaseFound = await Purchase.findById(req.params.id)
        purchaseFound.set(req.body)
        await purchaseFound.save()
        return res.json(purchaseFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const purchaseFound = await Purchase.findByIdAndDelete(req.params.id)
        return res.json(purchaseFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const purchaseFound = await Purchase.findById(req.params.id)
        return res.json(purchaseFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}