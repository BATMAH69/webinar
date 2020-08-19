'use strict'
const simple = require('./handlers/simple')
const users = require('./handlers/users')
const user = require('./handlers/user')
const configured = require('./handlers/configured')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/users', users)
  app.put('/user', user)
  app.get('/configured', configured(opts))
}      