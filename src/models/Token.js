const mongoose = require('../config/database')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    url: String,
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Token', tokenSchema)