'use strict'
const users = require('../data/users.json');

module.exports = function (req, res) {
  res.json(users)
}