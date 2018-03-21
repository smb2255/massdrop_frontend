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
  store.jobs = data.jobs
  console.log('onShowJobsSucces data', data)
  $('#showAllJobs').html(data)
}

const onShowJobFailure = function (data) {
  $('#showAlljobs').text('error')
}

module.exports = {
  onAddJobSuccess,
  onAddJobFailure,
  onShowJobsSuccess,
  onShowJobFailure
}
