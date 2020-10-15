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
    .then(function () {
      console.log('api signin firing')
    })
    // failure
    .catch(function () {
      console.log('api signin not firing')
    })
}
const changePW = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.changePW(data)
    // successful
    .then(function () {
      console.log('api changepw firing')
    })
    // failure
    .catch(function () {
      console.log('api changepw not firing')
    })
}
const signOut = (event) => {
  event.preventDefault()
  console.log('sign out firing')
}
module.exports = {
  signUp,
  signIn,
  changePW,
  signOut
}
