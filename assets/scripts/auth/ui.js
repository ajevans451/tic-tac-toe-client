'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}
const signUpFailure = function (error) {
  $('#message').text('Sign up failed, please retry')
}
const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}
const signInFailure = function (error) {
  $('#message').text('Could not sign in, please try again')
}
const pwChangeSuccess = function(response) {
  $('#message').text('Password change successful')
}
const pwChangeFailure = function(error) {
  $('#message').text('Password change failed, please retry')
}
const signOutSuccess = function(response) {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}
const signOutFailure = function (error) {
  $('#message').text('Could not sign out, please try again')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  pwChangeSuccess,
  pwChangeFailure,
  signOutSuccess,
  signOutFailure
}
