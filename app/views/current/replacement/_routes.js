const express = require('express')
const router = express.Router()

const axios = require('axios');

// Add your routes here - above the module.exports line


// Are you applying for a new card or a reissue? - new-application.html
// router.post('/newApplication', function (req, res) {
//   var newApplication = req.session.data['new-application']
//   if (newApplication == "new") {
//     res.redirect('where-do-you-live')
//   }
//   else if (newApplication == "reissue") {
//     // res.redirect('living-eu/exp-ben')
//     res.redirect('../reissue/new-application')
//   }
//   else {
//     res.redirect('ineligible-1')
//   }
// })

// Which card do you have? - card-type.html
router.post('/replacementType', function (req, res) {
  var replacementType = req.session.data['replacement-type']
  if (replacementType == "ghic") {
    res.redirect('replacement-ghic/full-name')
  }
  else if (replacementType == "ehic") {
    res.redirect('replacement-ehic/full-name')
  }
  else {
    res.redirect('ineligible-1')
  }
})

// Do you know your GHIC reference number? - replacement-ghic/know-ohs-number.html
router.post('/replacement-ghic/knowOhsNumber', function (req, res) {
  var knowOhsNumber = req.session.data['know-ohs-number']
  if (knowOhsNumber == "yes") {
    res.redirect('ohs-number')
  }
  else if (knowOhsNumber == "no") {
    res.redirect('replacement-reason')
  }
  else {
    res.redirect('know-ohs-number')
  }
})

// What is the reason for the replacement? - replacement-ghic/replacement-reason.html
router.post('/replacement-ghic/replacementReason', function (req, res) {
  var replacementReason = req.session.data['replacement-reason']
  if (replacementReason == "Lost") {
    res.redirect('cya-individual')
  }
  else if (replacementReason == "Damaged") {
    res.redirect('cya-individual')
  }
  else if (replacementReason == "Stolen") {
    res.redirect('cya-individual')
  }
  else {
    res.redirect('replacement-reason')
  }
})

















// getAddress lookup API - Application-settled
router.get('/application-settled/ghic/address-list-handler', function (req, res) {

  const postcode = req.session.data['postcode']
  const regex = RegExp('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')

  if (regex.test(postcode) === true) {

    if (postcode) {

      axios.get("https://api.getAddress.io/find/" + postcode + "?api-key=" + process.env.POSTCODE_API_KEY)
        .then(response => {
          console.log(response.data.addresses);
          var items = response.data.addresses;
          // res.render('current/apply/application-settled/ghic/address-list');
          res.render('current/apply/application-settled/ghic/address-list', { items: items });
        })
        .catch(error => {
          console.log(error);
          res.redirect('current/apply/application/address-manual')
        });

    } else {
      res.redirect('current/apply/application/address-manual')
    }
    
  }

});

// getAddress lookup API - Main Application
router.get('/application/address-list-handler', function (req, res) {

  const postcode = req.session.data['postcode']
  const regex = RegExp('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')

  if (regex.test(postcode) === true) {

    if (postcode) {

      axios.get("https://api.getAddress.io/find/" + postcode + "?api-key=" + process.env.POSTCODE_API_KEY)
        .then(response => {
          console.log(response.data.addresses);
          var items = response.data.addresses;
          // res.render('current/apply/application-settled/ghic/address-list');
          res.render('current/apply/application/address-list', { items: items });
        })
        .catch(error => {
          console.log(error);
          res.redirect('current/apply/application/address-manual')
        });

    } else {
      res.redirect('current/apply/application/address-manual')
    }
    
  }

});

router.post('/application/address-manual', (req, res) => {
  delete req.session.data['select-1']
  res.render('current/apply/application/address-manual')
});

router.post('/application/partner/partner-same-address', (req, res) => {
  const isSameAddress = req.session.data['partner-same-address']

  if (isSameAddress === "Yes") { 
    res.redirect('dob')
  } else if (isSameAddress === "No") {
    res.redirect('partner-address-country')
  } else {
    res.redirect('partner-address');
  }

})


module.exports = router