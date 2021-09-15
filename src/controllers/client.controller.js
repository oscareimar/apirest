const Client = require('../models/Client')

exports.all = async (req,res) => {
    try {
        const clients = await Client.find()
        return res.json(clients)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const client = new Client(req.body)
        await client.save()
        return res.json(client)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const clientFound = await Client.findById(req.params.id)
        clientFound.set(req.body)
        await clientFound.save()
        return res.json(clientFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const clientFound = await Client.findByIdAndDelete(req.params.id)
        return res.json(clientFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const clientFound = await Client.findById(req.params.id)
        return res.json(clientFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}