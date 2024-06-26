/* eslint-disable no-console */
const express = require('express')
const next = require('next')
const routes = require('./src/routes')
const proxyMiddleware = require('http-proxy-middleware')

const devProxy = {
  '/api': {
    target: 'https://backpackerdeals.com',
    changeOrigin: true,
  },
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV || 'development'
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
})

const handle = routes.getRequestHandler(app)

let server
app
  .prepare()
  .then(() => {
    server = express()

    server.use(express.static('static'))

    // server.use(function(req, res, next) {
    //   req.header(':method', 'GET')
    //   next()
    // })

    // Set up the proxy.
    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function(context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })
