const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Were you resident in the UK for 1 January 2021? - resident-before-jan.html
router.post('/residentBeforeJan', function (req, res) {
  var residentBeforeJan = req.session.data['resident-before-jan']
  if (residentBeforeJan == "Yes") {
    res.redirect('nationality')
  }
  else if (residentBeforeJan == "No") {
    res.redirect('nationality')
    // res.redirect('ineligible-2')
  }
  else {
    res.redirect('resident-before-jan')
  }
})

// Have you ever held UK citizenship? - uk-citizenship.html
router.post('/ukCitizenship', function (req, res) {
  var ukCitizenship = req.session.data['uk-citizenship']
  if (ukCitizenship == "Yes") {
    res.redirect('national-other-eu')
  }
  else if (ukCitizenship == "No") {
    res.redirect('birth-country')
  }
  else {
    res.redirect('uk-citizenship')
  }
})



module.exports = router