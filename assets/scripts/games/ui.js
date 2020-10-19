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
  $('#game-message').text('')
  $('#index-message').text('Your Games:')
  console.log(response)
  const game = response.games
  $('#games-index').html('')
  game.forEach(function (currentGame) {
    const gameHTML = (`
    <div class='index-cell col-3'> <h4>Cells: ${currentGame.cells}</h4>
    <p>Game ID: ${currentGame._id} </p>
    <p>Is it over? ${currentGame.over} </p></div>`)
    $('#games-index').append(gameHTML)
})
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
