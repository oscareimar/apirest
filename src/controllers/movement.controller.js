const Movement = require('../models/Movement')

exports.all = async (req,res) => {
    try {
        const movements = await Movement.find()
        return res.json(movements)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const movement = new Movement(req.body)
        await movement.save()
        return res.json(movement)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const movementFound = await Movement.findById(req.params.id)
        movementFound.set(req.body)
        await movementFound.save()
        return res.json(movementFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const movementFound = await Movement.findByIdAndDelete(req.params.id)
        return res.json(movementFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const movementFound = await Movement.findById(req.params.id)
        return res.json(movementFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}