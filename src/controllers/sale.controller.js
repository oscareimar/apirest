const Sale = require('../models/Sale')

exports.all = async (req,res) => {
    try {
        const sales = await Sale.find()
        return res.json(sales)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const sale = new Sale(req.body)
        await sale.save()
        return res.json(sale)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const saleFound = await Sale.findById(req.params.id)
        saleFound.set(req.body)
        await saleFound.save()
        return res.json(saleFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const saleFound = await Sale.findByIdAndDelete(req.params.id)
        return res.json(saleFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const saleFound = await Sale.findById(req.params.id)
        return res.json(saleFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}