const User = require('../models/User')

exports.all = async (req,res) => {
    try {
        const users = await User
        .find()
        .populate('role')
        return res.json(users)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.json(user)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const userFound = await User.findById(req.params.id)
        userFound.set(req.body)
        await userFound.save()
        return res.json(userFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const userFound = await User.findByIdAndDelete(req.params.id)
        return res.json(userFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const userFound = await User
        .findById(req.params.id)
        .populate('role')
        return res.json(userFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}