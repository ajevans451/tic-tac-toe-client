'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const createGame = (event) => {
  event.preventDefault()
  console.log('talking to events.js')
}
module.exports = {
  createGame
}
