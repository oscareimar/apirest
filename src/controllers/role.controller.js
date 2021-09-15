const Role = require('../models/Role')

exports.all = async (req,res) => {
    try {
        const roles = await Role.find()
        return res.json(roles)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const role = new Role(req.body)
        await role.save()
        return res.json(role)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const roleFound = await Role.findById(req.params.id)
        roleFound.set(req.body)
        await roleFound.save()
        return res.json(roleFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const roleFound = await Role.findByIdAndDelete(req.params.id)
        return res.json(roleFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const roleFound = await Role.findById(req.params.id)
        return res.json(roleFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}