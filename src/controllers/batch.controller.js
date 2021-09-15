const Batch = require('../models/Batch')

exports.all = async (req,res) => {
    try {
        const batchs = await Batch.find()
        return res.json(batchs)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const batch = new Batch(req.body)
        await batch.save()
        return res.json(batch)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const batchFound = await Batch.findById(req.params.id)
        batchFound.set(req.body)
        await batchFound.save()
        return res.json(batchFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const batchFound = await Batch.findByIdAndDelete(req.params.id)
        return res.json(batchFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const batchFound = await Batch.findById(req.params.id)
        return res.json(batchFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}