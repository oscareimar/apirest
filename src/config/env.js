const env = {
    HOST_DB: process.env.HOST_DB || "127.0.0.1",
    PORT_DB: process.env.PORT_DB || "27017",
    NAME_DB: process.env.NAME_DB || "INVENTARIODB",
    PORT_APP: process.env.PORT_APP || "3001",
    SECRET: process.env.SECRET || "key-secret",
    URL_SERVER: process.env.URL_SERVER || "http://127.0.0.1:3001",
}

module.exports = env