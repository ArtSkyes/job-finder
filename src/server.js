const jsonServer = require('json-server')
const path = require('path')
const fs = require('fs')

const server = jsonServer.create()

const filePath = path.join(__dirname, 'db.json')
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db)

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

module.exports = server