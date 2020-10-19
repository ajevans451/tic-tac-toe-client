'use strict'
// const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const createGame = (event) => {
  event.preventDefault()
  $('.box').text('')
  $('.box').css('background', '#F4FFF8')
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
let gameOver = false
const onTileClick = (event) => {
  event.preventDefault()
  const box = $(event.target)
  const tileIndex = $(event.target).attr('id')
  // console.log('clicked')
  console.log(currentPlayer)
  gameState()
  if (box.text() === '' && gameOver === false) {
    const data = `{
      game: {
        cell: {
          index: tileIndex,
          value: currentPlayer
        },
        over: gameOver
        }
      }`
    // console.log(data)
    api.updateGame(data)
      .then(ui.gameUpdateSuccess)
      .catch(ui.gameUpdateFailure)
    box.css('background', 'transparent')
    box.text(currentPlayer)
    currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
  } else {
    ui.spaceFilled()
  }
}
const gameState = (event) => {
  const tileArray = []
  for (let i = 0; i < 9; i++) {
    const tileVal = $('#' + i).text()
    tileArray[i] = tileVal
  }
  function checkEmpty (tile) {
    return tile !== ''
  } // rows
  if (tileArray[0] === tileArray[1] === tileArray[2] && tileArray[0] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray[3] === tileArray[4] === tileArray[5] && tileArray[3] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray[6] === tileArray[7] === tileArray[8] && tileArray[6] !== '') {
    gameOver = true
    return gameOver
    // columns
  } else if (tileArray[0] === tileArray[3] === tileArray[6] && tileArray[0] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray[1] === tileArray[4] === tileArray[7] && tileArray[1] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray[2] === tileArray[5] === tileArray[8] && tileArray[2] !== '') {
    gameOver = true
    return gameOver
    // diagonals
  } else if (tileArray[0] === tileArray[4] === tileArray[8] && tileArray[0] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray[2] === tileArray[4] === tileArray[6] && tileArray[2] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray.every(checkEmpty) === true) {
    gameOver = true
  } else {
    return gameOver
  }
}
module.exports = {
  createGame,
  showGames,
  onTileClick,
  currentPlayer: currentPlayer
}
