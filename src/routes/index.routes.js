const express = require('express')
const app = express()
const authJwt = require('../middlewares/auth')

app.use('/', require('../routes/auth.routes'))
app.use('/user',authJwt.verifyToken, require('../routes/user.routes'))
app.use('/batch',authJwt.verifyToken, require('../routes/batch.routes'))
app.use('/client',authJwt.verifyToken, require('../routes/client.routes'))
app.use('/item',authJwt.verifyToken, require('../routes/item.routes'))
app.use('/movement',authJwt.verifyToken, require('../routes/movement.routes'))
app.use('/provider',authJwt.verifyToken, require('../routes/provider.routes'))
app.use('/purchase',authJwt.verifyToken, require('../routes/purchase.routes'))
app.use('/sale',authJwt.verifyToken, require('../routes/sale.routes'))
app.use('/warehouse',authJwt.verifyToken, require('../routes/warehouse.routes'))

module.exports = app