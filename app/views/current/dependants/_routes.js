const express = require('express')
const router = express.Router()

const axios = require('axios');

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
  else {
    res.redirect('new-application')
  }
})


module.exports = router