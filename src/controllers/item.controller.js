const Item = require('../models/Item')

exports.all = async (req,res) => {
    try {
        const items = await Item.find()
        return res.json(items)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const item = new Item(req.body)
        await item.save()
        return res.json(item)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const itemFound = await Item.findById(req.params.id)
        itemFound.set(req.body)
        await itemFound.save()
        return res.json(itemFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const itemFound = await Item.findByIdAndDelete(req.params.id)
        return res.json(itemFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const itemFound = await Item.findById(req.params.id)
        return res.json(itemFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}