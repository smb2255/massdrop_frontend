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
const onShowJobs = function (event) {
  event.preventDefault()
  console.log(onShowJobs)
  api.showJobs()
    .then(ui.onshowJobsSuccess)
    .catch(ui.onshowJobsFailure)
}

const eventListeners = function () {
  $('#URLForm').on('submit', onAddJobSubmit)
  $('#showJobs').on('click', onShowJobs)
}
module.exports = {
  eventListeners
}
