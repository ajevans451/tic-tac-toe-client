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
  const tileIndex = $(event.target).attr('id')
  console.log('clicked')
  gameState()
  if (box.text() === '') {
    api.updateGame(tileIndex, currentPlayer)
    box.css('background', 'transparent')
    box.text(currentPlayer)
    currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
  } else {
    ui.spaceFilled()
  }
}
const gameState = (event) => {
  for (let i=0; i<9; i++) {

  }
}
module.exports = {
  createGame,
  showGames,
  onTileClick,
  currentPlayer: currentPlayer
}
