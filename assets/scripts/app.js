'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const submitEvents = require('./auth/events')
$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', submitEvents.signUp)
  $('#sign-in-form').on('submit', submitEvents.signIn)
  $('#change-password-form').on('submit', submitEvents.changePW)
  $('#sign-out-form').on('submit', submitEvents.signOut)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
})
