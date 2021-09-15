const jwt = require('jsonwebtoken')
const User = require('../models/User')
const env = require('../config/env')
const Token = require('../models/Token')

exports.verifyToken = async (req,res,next) => {
    try {
        let token = req.headers['x-access-token']
        if (!token) return res.status(403).json({message: "Se requiere token de autenticacion"})

        const decoded = jwt.verify(token, env.SECRET)
        console.log(decoded);
        
        const tokenValidate = await Token.findOne({
            token: token
        })
        if(!tokenValidate.status) return res.status(403).json({mesagge: 'Session Finalizada'})

        next()
    } catch (error) {
        console.log(`error: ${error}`);
        return res.status(404).json({mesagge: `error: ${error}`})
    }
}