'use strict'
const store = require('./../store')
const createGameSuccess = function (response) {
  $('#message').text('')
  $('#game-message').text('New game created')
  $('#game-board').show()
  store.game = response.game
}
const createGameFailure = function (error) {
  $('#message').text('')
  $('#game-message').text('Game creation failed, please try again')
}
const showGameSuccess = function (response) {
  $('#message').text('')
  $('#game-message').text('Your Games:')
}
const showGameFailure = function (response) {
  $('#message').text('')
  $('#game-message').text('Failed to show games, please try again')
}
const spaceFilled = function () {
  $('#game-message').text('That space is already taken')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGameSuccess,
  showGameFailure,
  spaceFilled
}
