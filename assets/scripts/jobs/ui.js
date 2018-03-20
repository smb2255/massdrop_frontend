'use strict'

const onAddJobSuccess = function (data) {
  console.log('data')
  $('#jobID').html('_id')
}

const onAddJobFailure = function () {
  $('#jobID').text('Job not added')
}

module.exports = {
  onAddJobSuccess,
  onAddJobFailure
}
