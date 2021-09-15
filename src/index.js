const app = require('./app')
const config = require('./config/env')

app.listen(config.PORT_APP)

console.log('Server on port: ', config.PORT_APP)