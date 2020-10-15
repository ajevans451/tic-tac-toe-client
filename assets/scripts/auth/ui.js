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
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}
const logInFailure = function (error) {
  $('#message').text('Could not sign in, please try again')
}
const pwChangeSuccess = function(response) {
  $('#message').text('Password change successful')
}
const pwChangeFailure = function(error) {
  $('#message').text('Password change failed, please retry')
}
const logOutSuccess = function(response) {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
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
