'use strict'
const users = require('../data/users.json');

module.exports = function (req, res) {
  console.log(req.body)
  const index = users.findIndex((item => item.id === req.body.id));
  users[index] = req.body
  res.json(users)
}