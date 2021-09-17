const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line

// Do you want to add another? (evidence for Right to Reside in UK) 
// - upload-reside-another.html, upload-reside-another2.html
router.post('/addEvidRight', function (req, res) {
  var addEvidRight = req.session.data['add-evid-right']
  if (addEvidRight == "Yes") {
    res.redirect('upload-reside2')
  }
  else if (addEvidRight == "No") {
    res.redirect('upload-res-uk')
  }
  else {
    res.redirect('upload-reside-another')
  }
})

// Do you want to add another? (evidence for UK residency) 
// - upload-res-uk-another.html, upload-res-uk-another2.html
router.post('/addEvidResUK', function (req, res) {
  var addEvidResUK = req.session.data['add-evid-res-uk']
  if (addEvidResUK == "Yes") {
    res.redirect('upload-res-uk2')
  }
  else if (addEvidResUK == "No") {
    res.redirect('cya')
  }
  else {
    res.redirect('upload-res-uk-another')
  }
})


module.exports = router