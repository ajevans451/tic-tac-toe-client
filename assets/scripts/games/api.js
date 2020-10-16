'use strict'
const config = require('./../config')
const store = require('./../store')
const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const showGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    id: store.game.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}
module.exports = {
  createGame,
  showGames,
  updateGame
}
