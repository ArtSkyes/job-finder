// server.js
const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
    console.log('Request:', req.method, req.url)
    next()
})

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))
server.use(router)

server.use((err, req, res, next) => {
    console.error('Error:', err.message)
    next(err)
})

module.exports = server