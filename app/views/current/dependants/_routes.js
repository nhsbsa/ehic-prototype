const express = require('express')
const router = express.Router()

const axios = require('axios');
const { info } = require('sass');

// Add your routes here - above the module.exports line


// What do you want to do? - new-application.html
router.post('/newApplication', function (req, res) {
  var newApplication = req.session.data['new-application']
  if (newApplication == "new") {
    res.redirect('where-do-you-live')
  }
  else if (newApplication == "replacement") {
    res.redirect('next-steps')
  }
  else if (newApplication == "dependant") {
    res.redirect('next-steps')
  }
  else {
    res.redirect('new-application')
  }
})

// Next steps for adding a dependant - next-steps.html
router.post('/nextSteps', function (req, res) {
  res.redirect('full-name') 
})

// Full name for adding a dependant - full-name.html
router.post('/fullName', function (req, res) {
  res.redirect('dob') 
})

// UK address for adding a dependant - uk-address.html
router.post('/ukAddress', function (req, res) {
  var ukAddress = req.session.data['uk-address']
  if (ukAddress == "yes") {
    res.redirect('postcode')
  }
  else if (ukAddress == "no") {
    res.redirect('country')
  }
  else {
    res.redirect('uk-address')
  }
})

// Postcode for UK address for adding a dependant - postcode.html
router.post('/postCode', function (req, res) {
  res.redirect('nino') 
})

// Country for non-UK address for adding a dependant - full-name.html
router.post('/country', function (req, res) {
  res.redirect('nino') 
})

module.exports = router