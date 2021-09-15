const mongoose = require('../config/database')
const Schema = mongoose.Schema

const providerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    email: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Provider', providerSchema)
