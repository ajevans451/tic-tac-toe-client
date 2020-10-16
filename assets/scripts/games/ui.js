'use strict'
const store = require('./../store')
const createGameSuccess = function(response) {
  $('#message').text('New game created')
}
const createGameFailure = function(error) {
  $('#message').text('Game creation failed, please try again')
}
module.exports = {
  createGameSuccess,
  createGameFailure
}
