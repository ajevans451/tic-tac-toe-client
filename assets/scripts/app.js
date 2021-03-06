'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const submitAuthEvents = require('./auth/events')
const submitGameEvents = require('./games/events')
$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', submitAuthEvents.signUp)
  $('#sign-in-form').on('submit', submitAuthEvents.logIn)
  $('#change-password-form').on('submit', submitAuthEvents.changePW)
  $('#sign-out-form').on('submit', submitAuthEvents.logOut)
  $('#create-game-form').on('submit', submitGameEvents.createGame)
  $('#show-games-form').on('submit', submitGameEvents.showGames)
  $('.box').on('click', submitGameEvents.onTileClick)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#create-game-form').hide()
  $('#show-games-form').hide()
  $('#game-board').hide()
})
