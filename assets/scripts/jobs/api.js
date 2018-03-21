'use strict'
// Use strict affects what config.apiOrigin does.
const config = require('../config.js')
const store = require('../store')

const addJob = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}

module.exports = {
  addJob
}
