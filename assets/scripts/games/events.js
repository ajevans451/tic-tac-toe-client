'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const createGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
module.exports = {
  createGame
}
