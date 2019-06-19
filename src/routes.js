const nextRoutes = require('next-routes')

const routes = nextRoutes()

exports.Router = routes.Router
exports.Link = routes.Link

module.exports = routes