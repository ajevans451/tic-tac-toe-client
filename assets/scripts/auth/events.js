'use strict'
const formFields = require('./../../../lib/get-form-fields')
const signUp = (event) => {
  event.preventDefault()
  console.log('sign up firing')
}
const signIn = (event) => {
  event.preventDefault()
  console.log('sign in firing')
}
const changePassword = (event) => {
  event.preventDefault()
  console.log('change password firing')
}
const signOut = (event) => {
  event.preventDefault()
  console.log('sign out firing')
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
