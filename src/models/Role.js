const mongoose = require('../config/database')
const Schema = mongoose.Schema

const roleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Role', roleSchema)