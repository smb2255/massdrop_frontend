'use strict'
const store = require('../store')

const onAddJobSuccess = function (data) {
  console.log(data)
  $('#jobID').html(data.job.url + ' id: ' + data.job._id)
}

const onAddJobFailure = function () {
  $('#jobID').text('Job not added')
}

const onShowJobsSuccess = function (data) {
  store.jobs = data.jobs
  data.jobs.forEach(job => {
    $('#show-jobs ul').append($('<li>').text(`${job.url}`))
    $('#clickMe').show()
  })
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
