'use strict'
const formFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const signUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = formFields(form)
  // console.log(data)
  api.signUp(data)
    .then(console.log('api signup firing'))
    .catch(console.log('api signup not firing'))
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
