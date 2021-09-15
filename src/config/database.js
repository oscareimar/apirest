const mongoose = require('mongoose')
const config = require('../config/env')

const {HOST_DB, PORT_DB, NAME_DB} = config
const url = `mongodb://${HOST_DB}:${PORT_DB}/${NAME_DB}`

const mongo = mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db connect'))
.catch(err => console.log(`error: ${err}`))

module.exports = mongoose