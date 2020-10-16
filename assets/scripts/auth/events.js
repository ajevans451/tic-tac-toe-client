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
const logIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.logIn(data)
    // successful
    .then(ui.logInSuccess)
    // failure
    .catch(ui.logInFailure)
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
const logOut = (event) => {
  event.preventDefault()
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}
const createGame = (event) => {
  event.preventDefault()
  console.log('talking to events.js')
}
module.exports = {
  signUp,
  logIn,
  changePW,
  logOut,
  createGame
}
