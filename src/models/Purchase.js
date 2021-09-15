const mongoose = require('../config/database')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate-v2')

const purchaseSchema = new Schema({
    total: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider'
    },
    detail: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        name: String,
        code: String,
        description: String,
        quantity: Number,
        price: Number,
        stotal: Number
    }]
}, {
    timestamps: true,
    versionKey: false
})

purchaseSchema.pre('save', function(next){
    let total = 0
    const arr_response = this.detail.map(e => {
        let stotal = e.quantity * e.price
        total = total + stotal
        e.stotal = stotal
        return e
    })
    this.total = total
    next()
})

purchaseSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', purchaseSchema)