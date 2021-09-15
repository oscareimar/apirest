const mongoose = require('../config/database')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    lastname: String,
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    tokens: [{
        type: Schema.Types.ObjectId,
        ref: 'Token'
    }]
},{
    timestamps: true,
    versionKey: false
})

userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(recivedPassword, password)
}

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

module.exports = mongoose.model('User', userSchema)