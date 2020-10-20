'use strict'
const store = require('./../store')
const events = require('./events')
// const events = require('./events.js')
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
  $('#games-index').show()
  $('#index-message').show()
  $('#game-message').show()
  $('#message').text('')
  $('#game-message').text('')
  $('#index-message').text('Your Games:')
  // console.log(response)
  const game = response.games
  $('#games-index').html('')
  let numOfGames = 0
  game.forEach(function (currentGame) {
    /* <div class='index-cell col-3'>
    <h5>Cells: ${currentGame.cells}</h5>
    <p>Game ID: ${currentGame._id} </p>
    <p>Is it over? ${currentGame.over} </p></div>`) */
    numOfGames += 1
})
  $('#games-index').text(numOfGames + ' games played')
}

const showGameFailure = function (response) {
  $('#message').text('')
  $('#game-message').text('Failed to show games, please try again')
}
const spaceFilled = function () {
  $('#game-message').text('That space is already taken')
}
const gameFinished = function () {
  $('#game-message').text('The game is already over')
}
const gameUpdateSuccess = function (response) {
  // console.log(store.game)
  $('#game-message').text(store.player + "'s turn taken successfully, next player's turn")
}
const gameUpdateFailure = function (error) {
  // console.log(store.game)
  $('#game-message').text('Could not update game, try again')
}
const showUpdateSuccess = (response) => {
  // console.log(response)
  // console.log(response.game.cells)
  store.game.cells = response.game.cells
}
const showUpdateFailure = function (error) {
  // console.log(store.game)
  $('#game-message').text('Could not update game, try again')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  showGameSuccess,
  showGameFailure,
  spaceFilled,
  gameFinished,
  gameUpdateSuccess,
  gameUpdateFailure,
  showUpdateSuccess,
  showUpdateFailure
}
