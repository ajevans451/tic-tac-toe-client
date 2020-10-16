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
  console.log('showing games')
}
let currentPlayer = 'x'
const onTileClick = (event) => {
  event.preventDefault()
  const box = $(event.target)
  console.log('clicked')
  box.css('background', 'transparent')
  box.text(currentPlayer)
  if (currentPlayer === 'O') {
    currentPlayer = 'x'
  } else {
    currentPlayer = 'O'
  }
}
module.exports = {
  createGame,
  showGames,
  onTileClick
}
