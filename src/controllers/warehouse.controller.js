const Warehouse = require('../models/Warehouse')

exports.all = async (req,res) => {
    try {
        const warehouses = await Warehouse.find()
        return res.json(warehouses)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.create = async (req,res) => {
    try {
        const warehouse = new Warehouse(req.body)
        await warehouse.save()
        return res.json(warehouse)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.update = async (req,res) => {
    try {
        const warehouseFound = await Warehouse.findById(req.params.id)
        warehouseFound.set(req.body)
        await warehouseFound.save()
        return res.json(warehouseFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.delete = async (req,res) => {
    try {
        const warehouseFound = await Warehouse.findByIdAndDelete(req.params.id)
        return res.json(warehouseFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.find = async (req,res) => {
    try {
        const warehouseFound = await Warehouse.findById(req.params.id)
        return res.json(warehouseFound)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}