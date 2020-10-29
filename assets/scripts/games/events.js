'use strict'
// const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
function currentTime () {
  const dt = new Date()
  const utcDate = dt.toUTCString()
  console.log(utcDate)
}
function sleep(milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}
const createGame = (event) => {
  event.preventDefault()
  $('.box').text('')
  $('.box').css('background', '#F4FFF8')
  api.createGame()
    .then(ui.createGameSuccess)
    // .then(console.log(store.game.cells))
    .then(resetGame)
    // .then(console.log(store.game.cells))
    .catch(ui.createGameFailure)
}
const showGames = (event) => {
  event.preventDefault()
  api.showGames()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}
let currentPlayer = 'x'
store.player = currentPlayer
let gameOver = false
const onTileClick = (event) => {
  event.preventDefault()
  const box = $(event.target)
  const tileIndex = $(event.target).attr('id')
  // console.log('clicked')
  // console.log(currentPlayer)
  if (box.text() === '' && gameOver === false) {
    const data = {
      game: {
        cell: {
          index: tileIndex,
          value: currentPlayer
        },
        over: gameOver
      }
    }
    // console.log(data)
    api.updateGame(data)
      // .then(currentTime(), console.log('prePatch'))
      .then(ui.gameUpdateSuccess)
      // .then(currentTime(), console.log('postPatch'))
      .catch(ui.gameUpdateFailure)
    sleep(100) // pause (under some circumstances get request returns before patch, shows wrong state)
    box.css('background', 'transparent')
    box.text(currentPlayer)
    store.player = currentPlayer.toUpperCase()
    api.showGameUpdate()
      // .then(currentTime(), console.log('preGet'))
      .then(ui.showUpdateSuccess)
      // .then(currentTime(), console.log('postGet'))
      .then(gameState)
      .catch(ui.showUpdateFailure)
    currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
    return currentPlayer
  } else if (gameOver === true) {
    // console.log(gameOver)
    ui.gameFinished()
  } else {
    ui.spaceFilled()
  }
}
const gameState = function (event) {
  const tileArray = store.game.cells
  // console.log(tileArray[0] + ' ' + tileArray[1] + ' ' + tileArray[2] + ' ' + tileArray[3] + ' ' + tileArray[4] + ' ' + tileArray[5] + ' ' + tileArray[6] + ' ' + tileArray[7] + ' ' + tileArray[8])
  // console.log(gameOver)
  function checkEmpty (tile) {
    return tile !== ''
  }
  // rows
  if ((tileArray[0] !== '') && (tileArray[0] === tileArray[1]) && (tileArray[0] === tileArray[2])) {
    // console.log('top row')
    $('#game-message').text(tileArray[0].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
  } else if ((tileArray[3] !== '') && (tileArray[3] === tileArray[4]) && (tileArray[3] === tileArray[5])) {
    // console.log('middle row')
    $('#game-message').text(tileArray[3].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
  } else if ((tileArray[6] !== '') && (tileArray[6] === tileArray[7]) && (tileArray[6] === tileArray[8])) {
    // console.log('bottom row')
    $('#game-message').text(tileArray[6].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
    // columns
  } else if ((tileArray[0] !== '') && (tileArray[0] === tileArray[3]) && (tileArray[0] === tileArray[6])) {
    // console.log('left column')
    $('#game-message').text(tileArray[0].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
  } else if ((tileArray[1] !== '') && (tileArray[1] === tileArray[4]) && (tileArray[1] === tileArray[7])) {
    // console.log('middle column')
    $('#game-message').text(tileArray[1].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
  } else if ((tileArray[2] !== '') && (tileArray[2] === tileArray[5]) && (tileArray[2] === tileArray[8])) {
    // console.log('right column')
    $('#game-message').text(tileArray[2].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
    // diagonals
  } else if ((tileArray[0] !== '') && (tileArray[0] === tileArray[4]) && (tileArray[0] === tileArray[8])) {
    // console.log('\\')
    $('#game-message').text(tileArray[0].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
  } else if ((tileArray[2] !== '') && (tileArray[2] === tileArray[4]) && (tileArray[2] === tileArray[6])) {
    // console.log('/')
    $('#game-message').text(tileArray[2].toUpperCase() + ' wins! Play again by creating a new game')
    gameOver = true
    return gameOver
  } else if (tileArray.every(checkEmpty) === true) {
    // console.log('tie')
    $('#game-message').text("It's a tie! Play again by creating a new game")
    gameOver = true
  } else {
    return gameOver
  }
}
const resetGame = (response) => {
  if (store.game.cells !== []) {
    store.game.cells = []
    gameOver = false
  }
}
module.exports = {
  createGame,
  showGames,
  onTileClick,
  currentPlayer: currentPlayer,
  gameState
}
