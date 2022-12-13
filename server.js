
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('data.json')

// /!\ Bind the router db to the app
server.db = router.db

const middlewares = jsonServer.defaults()
server.use(middlewares)

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    // '/api/*': '/$1',
    "/auth/signup": "/register",
    "/auth/signin": "/login",

    "/roles": "/roles?_embed=permissions",
    "/users": "/users?_expand=role",
    "/users/:id": "/users/:id?_expand=role"
}))

// -m ./node_modules/json-server-auth
// You must apply the auth middleware before the router
server.use(auth)
server.use(router)

const PORT = 3000
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})

// Export the Server API
module.exports = server
