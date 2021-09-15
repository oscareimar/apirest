const mongoose = require('../config/database')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    document:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: String,
},{
    timestamps:true,
    versionKey: false
})

module.exports = mongoose.model('Client', clientSchema)