'use strict'
// Use strict affects what config.apiOrigin does.
const config = require('../config.js')
// const store = require('../store')

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

const showJobs = function () {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

module.exports = {
  addJob,
  showJobs
}
