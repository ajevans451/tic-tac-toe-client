'use strict'
// const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
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
      .then(ui.gameUpdateSuccess)
      .catch(ui.gameUpdateFailure)
    box.css('background', 'transparent')
    box.text(currentPlayer)
    store.player = currentPlayer.toUpperCase()
    api.showGameUpdate()
      .then(ui.showUpdateSuccess)
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
  /* function checkEqual (num1, num2, num3) {
    const equal = !!(tileArray[num1] === tileArray[num2] === tileArray[num3] && tileArray[num1] !== '')
    return equal
  } */
  // rows
  if ((tileArray[0] !== '') && (tileArray[0] === tileArray[1]) && (tileArray[0] === tileArray[2])) {
  // if (tileArray[0] === tileArray[1] === tileArray[2] && tileArray[0] !== '') {
    gameOver = true
    return gameOver
  } else if ((tileArray[3] !== '') && (tileArray[3] === tileArray[4]) && (tileArray[3] === tileArray[5])) {
    // } else if (tileArray[3] === tileArray[4] === tileArray[5] && tileArray[3] !== '') {
    gameOver = true
    return gameOver
  } else if ((tileArray[6] !== '') && (tileArray[6] === tileArray[7]) && (tileArray[6] === tileArray[8])) {
  // } else if (tileArray[6] === tileArray[7] === tileArray[8] && tileArray[6] !== '') {
    gameOver = true
    return gameOver
    // columns
  } else if ((tileArray[0] !== '') && (tileArray[0] === tileArray[3]) && (tileArray[0] === tileArray[6])) {
  // } else if (tileArray[0] === tileArray[3] === tileArray[6] && tileArray[0] !== '') {
    gameOver = true
    return gameOver
  } else if ((tileArray[1] !== '') && (tileArray[1] === tileArray[4]) && (tileArray[1] === tileArray[7])) {
  // } else if (tileArray[1] === tileArray[4] === tileArray[7] && tileArray[1] !== '') {
    gameOver = true
    return gameOver
  } else if ((tileArray[2] !== '') && (tileArray[2] === tileArray[5]) && (tileArray[2] === tileArray[8])) {
  // } else if (tileArray[2] === tileArray[5] === tileArray[8] && tileArray[2] !== '') {
    gameOver = true
    return gameOver
    // diagonals
  } else if ((tileArray[0] !== '') && (tileArray[0] === tileArray[4]) && (tileArray[0] === tileArray[8])) {
  // } else if (tileArray[0] === tileArray[4] === tileArray[8] && tileArray[0] !== '') {
    gameOver = true
    return gameOver
  } else if ((tileArray[2] !== '') && (tileArray[2] === tileArray[4]) && (tileArray[2] === tileArray[6])) {
  // } else if (tileArray[2] === tileArray[4] === tileArray[6] && tileArray[2] !== '') {
    gameOver = true
    return gameOver
  } else if (tileArray.every(checkEmpty) === true) {
    gameOver = true
  } else {
    return gameOver
  }
  /* if ($('#0').text() === $('#1').text() === $('#2').text() && $('#0').text() !== '') {
    gameOver = true
    return gameOver
  } else if ($('#3').text() === $('#4').text() === $('#5').text() && $('#3').text() !== '') {
    gameOver = true
    return gameOver
  } else if ($('#6').text() === $('#7').text() === $('#8').text() && $('#6').text() !== '') {
    gameOver = true
    return gameOver
    // columns
  } else if ($('#0').text() === $('#3').text() === $('#6').text() && $('#0').text() !== '') {
    gameOver = true
    return gameOver
  } else if ($('#1').text() === $('#4').text() === $('#7').text() && $('#1').text() !== '') {
    gameOver = true
    return gameOver
  } else if ($('#2').text() === $('#5').text() === $('#8').text() && $('#2').text() !== '') {
    gameOver = true
    return gameOver
    // diagonals
  } else if ($('#0').text() === $('#4').text() === $('#8').text() && $('#0').text() !== '') {
    gameOver = true
    return gameOver
  } else if ($('#2').text() === $('#4').text() === $('#6').text() && $('#2').text() !== '') {
    gameOver = true
    return gameOver
  } else if ($('#0').text() !== '' && $('#1').text() !== '' && $('#2').text() !== '' && $('#3').text() !== '' && $('#4').text() !== '' && $('#5').text() !== '' && $('#6').text() !== '' && $('#7').text() !== '' && $('#8').text() !== '') {
    gameOver = true
    return gameOver
  } else {
    gameOver = false
    return gameOver
  } */
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
