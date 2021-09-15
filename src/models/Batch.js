const mongoose = require('../config/database')
const Schema = mongoose.Schema

const batchSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    quantity: Number,
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
    purchase: {
        type: Schema.Types.ObjectId,
        ref: 'Purchase'
    }
}, {
    timestamps: true,
    versionkey: false
})

module.exports = mongoose.model('Batch', batchSchema)