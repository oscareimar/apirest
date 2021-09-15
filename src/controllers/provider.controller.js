const Provider = require('../models/Provider')

exports.all = async (req,res) => {
    try {
        const providers = await Provider.find()
        return res.json(providers)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const provider = new Provider(req.body)
        await provider.save()
        return res.json(provider)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const providerFound = await Provider.findById(req.params.id)
        providerFound.set(req.body)
        await providerFound.save()
        return res.json(providerFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const providerFound = await Provider.findByIdAndDelete(req.params.id)
        return res.json(providerFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const providerFound = await Provider.findById(req.params.id)
        return res.json(providerFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}