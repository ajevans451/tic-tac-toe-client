'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}
const signUpFailure = function (error) {
  $('#message').text('Sign up failed, please retry')
}
const logInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  store.user = response.user
  console.log(store.user.token)
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#create-game-form').show()
  $('#show-games-form').show()
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-in-form').trigger('reset')
}
const logInFailure = function (error) {
  $('#message').text('Could not sign in, please try again')
}
const pwChangeSuccess = function (response) {
  $('#message').text('Password change successful')
}
const pwChangeFailure = function (error) {
  $('#message').text('Password change failed, please retry')
}
const logOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#change-password-form').hide()
  $('#change-password-form').trigger('reset')
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#create-game-form').hide()
  $('#show-games-form').hide()
  $('#game-board').hide()
  $('#games-index').hide()
  $('#index-message').hide()
  $('#game-message').hide()
  $('#index-message').trigger('reset')
  $('#game-message').trigger('reset')
  // resetForms()
}
const logOutFailure = function (error) {
  $('#message').text('Could not sign out, please try again')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  pwChangeSuccess,
  pwChangeFailure,
  logOutSuccess,
  logOutFailure
}
