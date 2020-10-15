'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const signUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.signUp(data)
    // successful
    .then(ui.signUpSuccess)
    // failure
    .catch(ui.signUpFailure)
}
const signIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.signIn(data)
    // successful
    .then(ui.signInSuccess)
    // failure
    .catch(ui.signInFailure)
}
const changePW = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.changePW(data)
    // successful
    .then(ui.pwChangeSuccess)
    // failure
    .catch(ui.pwChangeFailure)
}
const signOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  signUp,
  signIn,
  changePW,
  signOut
}
