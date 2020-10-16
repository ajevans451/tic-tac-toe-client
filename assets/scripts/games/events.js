'use strict'
// const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const createGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
const showGames = (event) => {
  event.preventDefault()
  api.showGames()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}
let currentPlayer = 'x'
const onTileClick = (event) => {
  event.preventDefault()
  const box = $(event.target)
  console.log('clicked')
  if (box.text() === '') {
    box.css('background', 'transparent')
    box.text(currentPlayer)
    currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
  } else {
    ui.spaceFilled()
  }
}
module.exports = {
  createGame,
  showGames,
  onTileClick,
  currentPlayer: currentPlayer
}
