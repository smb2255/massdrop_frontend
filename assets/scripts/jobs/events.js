'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddJobSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.addJob(data)
    .then(ui.onAddJobSuccess)
    .catch(ui.onAddJobFailure)
}

const eventListeners = function () {
  $('#URLForm').on('submit', onAddJobSubmit)
}
module.exports = {
  eventListeners
}
