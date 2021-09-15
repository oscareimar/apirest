const mongoose  = require('../config/database')
const Schema = mongoose.Schema

const warehouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ['Materia Prima','Producto Terminado'],
            message: '{VALUE} no permitido'
        }
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Warehouse', warehouseSchema)