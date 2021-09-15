const mongoose = require('../config/database')
const Schema = mongoose.Schema

const movementSchema = new Schema({
    type:{
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    warehouse: {
        type: Schema.Types.ObjectId,
        ref: 'Warehouse'
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Movement', movementSchema)