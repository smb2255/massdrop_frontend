'use strict'
const store = require('../store')

const onAddJobSuccess = function (data) {
  console.log(data)
  $('#jobID').html(data.job.url + ': ' + data.job._id)
}

const onAddJobFailure = function () {
  $('#jobID').text('Job not added')
}

const onShowJobsSuccess = function (data) {
  store.job = data.job
  console.log(data)
  $('#showJobs').html(data.job.url + ': ' + data.job._id)
}

const onShowJobFailure = function () {
  $('#showJobs').text('error')
}

module.exports = {
  onAddJobSuccess,
  onAddJobFailure,
  onShowJobsSuccess,
  onShowJobFailure
}
