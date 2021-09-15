const mongoose = require('../config/database')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    code: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    unity: {
        type: String,
        enum: {
            values: ['Kilogramo','Unidad'],
            message: '{VALUE} no permitido'
        }
    },
    stock: {
        type: Number,
        default: 0
    },
    price_sale: {
        type: Number,
        default: 0
    },
    price_purchase: {
        type: Number,
        default: 0
    },
    prodider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider'
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Item', itemSchema)