const User = require('../models/User')
const jwt = require('jsonwebtoken')
const env = require('../config/env')
const utils = require('../utils/string')
const Token = require('../models/Token')

exports.signin = async (req,res) => {
    try {
        const userFound = await User.findOne({ email: req.body.email})
        if (!userFound) return res.send({message: "Usuario No Encontrado"})

        console.log(userFound.password,req.body.password);
        const matchPassword = await User.comparePassword(
            userFound.password,
            req.body.password
        )
        if (!matchPassword) return res.json({message: "Contraseña Incorrecta"})

        const token = jwt.sign({
            id: userFound._id
        }, env.SECRET, {expiresIn: 86400})

        const newToken = new Token({
            token: token,
            type: 'AuthenticationUser',
            user: userFound._id
        })
        await newToken.save()
        return res.json({ token })
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.signup = async (req,res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: await User.encryptPassword(req.body.password)
        })

        await newUser.save()
        const tokenActivateUser = jwt.sign({
            id: newUser._id
        }, env.SECRET, {expiresIn: 300})
        const url = utils.genUrlWithToken(tokenActivateUser)
        const newToken = new Token({
            token: tokenActivateUser,
            type: 'ActivateUser',
            user: newUser._id,
            url: url
        })
        await newToken.save()
        
        return res.json({newUser,urlPassworeReset: url})
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

exports.signout = async (req,res) => {
    try {
        const token = await Token.findOne({
            token: req.headers['x-access-token']
        })
        token.set({status: false})
        await token.save()
        return res.status(403).json({message: 'Session Finalizada Correctamente'})
    } catch (error) {
        console.log(`error: ${error}`)
    }
}