const mongoose = require('../config/database')
const Schema = mongoose.Schema

const saleSchema = new Schema({
    number: {
        type: Number,
        default: 0
    },
    document:{
        type: String,
        required: true
    },
    client:{
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    total:{
        type: Number,
        default: 0
    },
    detail: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        quantity: Number,
        name: String,
        unity:  String,
        price: Number,
        code: String,
        stotal: Number,
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps:true,
    versionKey: false
})

saleSchema.pre('save', function(next){
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

module.exports = mongoose.model('Sale', saleSchema)