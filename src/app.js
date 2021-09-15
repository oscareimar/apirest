const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('./config/database')
const morgan = require('morgan')

//Settings
app.set('port', process.env.port || 3001)
app.use(cors())
app.use(morgan('tiny'))

//Middleware
app.use(express.json())

//Routes
app.get('/', (req,res) => {
    res.json({
        message: "Bienvenido"
    })
})
app.use('/api',require('./routes/index.routes'))

module.exports = app