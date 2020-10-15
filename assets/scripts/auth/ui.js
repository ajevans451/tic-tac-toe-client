'use strict'
const store = require('./../store')
const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
}
const signUpFailure = function (error) {
  $('#message').text('Sign up failed, please try again')
}
module.exports = {
  signUpSuccess,
  signUpFailure
}
