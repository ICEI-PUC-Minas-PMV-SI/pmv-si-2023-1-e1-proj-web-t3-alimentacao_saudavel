// See https://github.com/typicode/json-server#module
const fs = require('fs')
const db = JSON.parse(fs.readFileSync('src/database/db.json'))
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
