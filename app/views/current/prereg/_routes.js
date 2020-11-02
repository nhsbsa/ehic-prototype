const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Is the user under 18 or over 18
// router.post('/application-settled/child-1/user-age-handler', function (req, res) {
//     const day = req.session.data['example-day']
//     const month = req.session.data['example-month']
//     const year =req.session.data['example-year']

//     const fullDOB = year + "-" + month + "-" + day;

//     function userDOB(dob) {
        
//         this.dateOfBirth = new Date(dob);
        
//         this.calculateAge = function() {
//           const diff = Date.now() - this.dateOfBirth.getTime(); 
//           const ageDate = new Date(diff); 
//           return Math.abs(ageDate.getUTCFullYear() - 1970);
//         };

//     }

//     const age =new userDOB(fullDOB).calculateAge();

//     if (age >= '18') {
//         res.redirect('full-name')
//     } else {
//         res.redirect('address-lookup');
//     }

// })






// What is your nationality? - nationality.html
router.post('/nationality', function (req, res) {
  var nationality = req.session.data['nationality']
  if (nationality == "UK"){
    res.redirect('studying-uk-citizen')
  }
  else if (nationality == "dual"){
    res.redirect('birth-country-dual')
  }
  else if (nationality == "EU, EEA or Swiss"){
    res.redirect('uk-citizenship')
  }
  else {
    res.redirect('ineligible-3')
  }
})

// Have you ever held UK citizenship? - uk-citizenship.html
router.post('/ukCitizenship', function (req, res) {
  var ukCitizenship = req.session.data['uk-citizenship']
  if (ukCitizenship == "Yes"){
    res.redirect('national-other-eu')
  }
  else if (ukCitizenship == "No"){
    res.redirect('birth-country')
  }
  else {
    res.redirect('uk-citizenship')
  }
})

// Are you a national of another EU country? - national-other-eu.html
router.post('/nationalOtherEu', function (req, res) {
  var nationalOtherEu = req.session.data['national-other-eu']
  if (nationalOtherEu == "Yes"){
    res.redirect('birth-country')
  }
  else if (nationalOtherEu == "No"){
    res.redirect('ineligible-4')
  }
  else {
    res.redirect('national-other-eu')
  }
})

// Were you resident in the UK for 1 January 2021? - resident-before-jan.html
router.post('/residentBeforeJan', function (req, res) {
  var residentBeforeJan = req.session.data['resident-before-jan']
  if (residentBeforeJan == "Yes"){
    res.redirect('nationality')
  }
  else if (residentBeforeJan == "No"){
    res.redirect('ineligible-2')
  }
  else {
    res.redirect('resident-before-jan')
  }
})

// Where were you born? - birth-country-dual.html
router.post('/dualBirthCountry', function (req, res) {
  var dualBirthCountry = req.session.data['dual-birth-country']
  if (dualBirthCountry == "UK"){
    res.redirect('ineligible-esw')
  }
  else if (dualBirthCountry == "NI"){
    res.redirect('renounce')
  }
  else if (dualBirthCountry == "Other"){
    res.redirect('application-settled/full-name')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// Where were you born? - birth-country.html
router.post('/birthCountry', function (req, res) {
  var birthCountry = req.session.data['birth-country']
  if (birthCountry == "UK"){
    res.redirect('ineligible')
  }
  else if (birthCountry == "NI"){
    res.redirect('renounce')
  }
  else if (birthCountry == "Other"){
    // res.redirect('application-settled/full-name')
    res.redirect('studying-eu-citizen')
  }
  else {
    res.redirect('birth-country-dual')
  }
})

// RENOUCE UK CITIZENSHIP
router.post('/renounce', function (req, res) {
  var renounce = req.session.data['renounce']
  if (renounce == "Yes"){
    res.redirect('application-ni/full-name')
  }
  else if (renounce == "No"){
    res.redirect('ineligible-ni')
  }
  else {
    res.redirect('renounce')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-settled/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes"){
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No"){
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-student-ss/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes"){
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No"){
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Do you know your NHS number? - know-nhs-number.html
router.post('/application-ni/knowNhsNumber', function (req, res) {
  var knowNhsNumber = req.session.data['know-nhs-number']
  if (knowNhsNumber == "Yes"){
    res.redirect('nhs-number')
  }
  else if (knowNhsNumber == "No"){
    res.redirect('gender')
  }
  else {
    res.redirect('know-nhs-number')
  }
})

// Who is the application for? - who-for-eu.html
router.post('/whoFor', function (req, res) {
  var whoFor = req.session.data['who-for']
  if (whoFor == "Myself and members of my family"){
    res.redirect('settled-status')
  }
  else if (whoFor == "Someone else"){
    res.redirect('')
  }
  else {
    res.redirect('who-for-eu')
  }
})

// Where do you live? - where-do-you-live.html
router.post('/whereDoYouLive', function (req, res) {
  var whereDoYouLive = req.session.data['where-do-you-live']
  if (whereDoYouLive == "UK"){
    res.redirect('resident-before-jan')
  }
  else if (whereDoYouLive == "EU"){
    res.redirect('exp-ben')
  }
  else {
    res.redirect('ineligible-1')
  }
})

// Where will you be living? - where-do-you-live-eu-citizen.html
router.post('/willYouBeLiving', function (req, res) {
  var willYouBeLiving = req.session.data['where-will-you-live']
  if (willYouBeLiving == "UK"){
    // res.redirect('application-settled/full-name')
    res.redirect('settled-status')
  }
  else if (willYouBeLiving == "EU"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('ineligible')
  }
})

// Are you a UK national? (living in the UK)
router.post('/bornInUk', function (req, res) {
  var bornInUk = req.session.data['born-in-uk']
  if (bornInUk == "Yes"){
    res.redirect('student')
    res.redirect('eu-working')
  }
  else {
    res.redirect('cannot-apply')
  }
})

// Receiving exportable benefits - exp-ben.html
router.post('/expBen', function (req, res) {
  var expBen = req.session.data['expBen']
  if (expBen == "Yes"){
    res.redirect('application-s1/info-s1')
    // res.redirect('application-s1/full-name')
  }
  else {
    res.redirect('eu-studying')
  }
})

// Are you studying, or do you intend to study in the EU, EEA or
// Switzerland before 1 January 2021? - uk-studying.html
router.post('/ukStudying', function (req, res) {
  var ukStudying = req.session.data['uk-studying']
  if (ukStudying == "Yes"){
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('application/full-name')
  }
})

// Are you working in the EU, EEA or Switzerland? - eu-working.html
router.post('/euWorking', function (req, res) {
  var student = req.session.data['eu-working']
  if (student == "Yes"){
    res.redirect('application-pw/evidence-pw')
  }
  else {
    res.redirect('ineligible')
  }
})

// Posted worker form type - form-type.html
router.post('/application-pw/pwFormType', function (req, res) {
  var pwFormType = req.session.data['form-type']
  if (pwFormType == "A1"){
    res.redirect('a1-country')
  }
  else if (pwFormType == "S1"){
    res.redirect('s1-country')
  }
  else {
    res.redirect('../ineligible')
  }
})

// Will you be studying in the EU, EEA or Switzerland
// before 1 January 2021? - eu-studying.html
router.post('/euStudying', function (req, res) {
  var euStudent = req.session.data['eu-studying']
  if (euStudent == "Yes"){
    res.redirect('application-student-in-eu/evidence-student')
  }
  else {
    res.redirect('eu-working')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-uk-citizen.html
router.post('/studyingUkCitizen', function (req, res) {
  var studyingUkCitizen = req.session.data['studying-uk-citizen']
  if (studyingUkCitizen == "Yes"){
    res.redirect('application-student/evidence-student')
  }
  else {
    res.redirect('ineligible-not-studying')
  }
})

// Are you studying, or do you intend to study in 
// the EU, EEA or Switzerland before 1 January 2021?
// studying-eu-citizen.html
router.post('/studyingEuCitizen', function (req, res) {
  var studyingEuCitizen = req.session.data['studying-eu-citizen']
  if (studyingEuCitizen == "Yes"){
    res.redirect('application-student-ss/evidence-student')
  }
  else {
    res.redirect('application-settled/info-eu-national')
  }
})

// Do you want to add your PARENTS to your application? - EUSS
router.post('/application-settled/addParent', function (req, res) {
  var addParent = req.session.data['add-parent']
  if (addParent == "Yes"){
    res.redirect('parent/full-name')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// What is your parent's nationality? - EUSS
router.post('/application-settled/parent/parentNationality', function (req, res) {
  var addParent = req.session.data['parent-nationality']
  if (addParent == "UK"){
    res.redirect('ineligible2')
  }
  else if (addParent == "EU"){
    res.redirect('arrival')
  }
  else if (addParent == "Other"){
    res.redirect('settled-status')
  }
  else {
    res.redirect('nationality')
  }
})

// Do you want to add your PARENTS to your application? - NI
router.post('/application-ni/addParent', function (req, res) {
  var addParent = req.session.data['add-parent']
  if (addParent == "Yes"){
    res.redirect('parent/commence-date')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// Do you want to add ANOTHER PARENT to your application? EUSS
router.post('/application-settled/parentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('parent/full-name')
  }
  else {
    // res.redirect('add-grandparent')
    res.redirect('parent/cya-parent')
  }
})

// Do you want to add ANOTHER PARENT to your application? NI
router.post('/application-ni/parentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('parent/commence-date')
  }
  else {
    res.redirect('add-grandparent')
  }
})

// PARENTS - Did your relationship commence before 1 January 2021?
router.post('/application-settled/parent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// GRANDPARENTS - Did your relationship commence before 1 January 2021?
router.post('/application-settled/grandparent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// PARENTS - Did your relationship commence before 1 January 2021? - NI
router.post('/application-ni/parent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// GRANDPARENTS - Did your relationship commence before 1 January 2021? - NI
router.post('/application-ni/grandparent/parentCommence', function (req, res) {
  var parentCommence = req.session.data['parent-commence']
  if (parentCommence == "Yes"){
    res.redirect('full-name')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add your GRANDPARENTS to your application? - EUSS
router.post('/application-settled/addGrand', function (req, res) {
  var addGrand = req.session.data['add-grand']
  if (addGrand == "Yes"){
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add your GRANDPARENTS to your application? - NI
router.post('/application-ni/addGrand', function (req, res) {
  var addGrand = req.session.data['add-grand']
  if (addGrand == "Yes"){
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add ANOTHER GRANDPARENT to your application? EUSS
router.post('/application-settled/grandparentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add ANOTHER GRANDPARENT to your application? NI
router.post('/application-ni/grandparentAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('grandparent/commence-date')
  }
  else {
    res.redirect('add-grandchild')
  }
})

// Do you want to add your GRANDCHILDREN to your application?
router.post('/application-settled/grandchild', function (req, res) {
  var addGrand = req.session.data['add-grandchild']
  if (addGrand == "Yes"){
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER GRANDCHILD to your application? EUSS
router.post('/application-settled/grandchildAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-all')
  }
})

// Do you want to add your GRANDCHILDREN to your application? - NI
router.post('/application-ni/grandchild', function (req, res) {
  var addGrand = req.session.data['add-grandchild']
  if (addGrand == "Yes"){
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-family')
  }
})

// Do you want to add ANOTHER GRANDCHILD to your application? - NI
router.post('/application-ni/grandchildAddAnother', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('grandchild/full-name')
  }
  else {
    res.redirect('cya-all')
  }
})

// Do you want to add anyone else to your application? EUSS
router.post('/application-settled/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes"){
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    res.redirect('spouses')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add anyone else to your application? NI
router.post('/application-ni/addSomeone', function (req, res) {
  var addAnother = req.session.data['add-someone']
  if (addAnother == "Yes"){
    // res.redirect('partner/full-name')
    // res.redirect('partner/married')
    res.redirect('spouses')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Do you want to add your spouse or civil partner to your application? EUSS
router.post('/application-settled/spouses', function (req, res) {
  var spouses = req.session.data['spouses']
  if (spouses == "Yes"){
    res.redirect('spouse/full-name')
  }
  // else if (partners == "Durable"){
  //   res.redirect('durable/full-name')
  // }
  else if (spouses == "No"){
    res.redirect('partners')
  }
  else {
    res.redirect('spouses')
  }
})

// Where does your spouse or civil partner live? - EUSS
router.post('/application-settled/spouse/addressCountry', function (req, res) {
  var addressCountry = req.session.data['address-country']
  if (addressCountry == "UK"){
    res.redirect('partner-address')
  }
  else if (addressCountry == "EU"){
    res.redirect('address-eu')
  }
  else if (addressCountry == "Other"){
    res.redirect('ineligible2')
  }
  else {
    res.redirect('address-country')
  }
})

// Do you want to add your spouse or civil partner to your application? - NI
router.post('/application-ni/spouses', function (req, res) {
  var spouses = req.session.data['spouses']
  if (spouses == "Yes"){
    res.redirect('spouse/partner-address')
  }
  // else if (partners == "Durable"){
  //   res.redirect('durable/full-name')
  // }
  else if (spouses == "No"){
    // res.redirect('add-child-1')
    res.redirect('partners')
  }
  else {
    res.redirect('spouses')
  }
})

// Do you want to add your unmarried (durable) partner to your application? EUSS
router.post('/application-settled/partners', function (req, res) {
  var partners = req.session.data['partners']
  if (partners == "Yes"){
    res.redirect('durable/full-name')
  }
  else if (partners == "No"){
    res.redirect('add-child-1')
  }
  else {
    res.redirect('partners')
  }
})

// Do you want to add your unmarried (durable) partner to your application? NI
router.post('/application-ni/partners', function (req, res) {
  var partners = req.session.data['partners']
  if (partners == "Yes"){
    res.redirect('durable/full-name')
  }
  else if (partners == "No"){
    res.redirect('add-child-1')
  }
  else {
    res.redirect('partners')
  }
})

// What is your partner's nationality? - nationality.html
router.post('/application-settled/durable/partnerNationality', function (req, res) {
  var partnerNationality = req.session.data['partnerNationality']
  if (partnerNationality == "UK"){
    res.redirect('ineligible')
  }
  // else if (partnerNationality == "dual"){
  //   res.redirect('relationship-date')
  // }
  else if (partnerNationality == "EU, EEA or Swiss"){
    res.redirect('arrival')
  }
  else {
    res.redirect('settled-status')
  }
})

// Did your partner arrive in the UK before 1 January 2021? - arrival.html
router.post('/application-settled/durable/arrival', function (req, res) {
  var arrival = req.session.data['arrival']
  if (arrival == "Yes"){
    res.redirect('own-app')
  }
  else if (arrival == "No"){
    res.redirect('ineligible5')
  }
  else {
    res.redirect('arrival')
  }
})

// Did your PARENT arrive in the UK before 1 January 2021? - arrival.html
router.post('/application-settled/parent/arrival', function (req, res) {
  var arrival = req.session.data['arrival']
  if (arrival == "Yes"){
    res.redirect('own-app')
  }
  else if (arrival == "No"){
    res.redirect('ineligible5')
  }
  else {
    res.redirect('arrival')
  }
})

// Does your PARTNER have UK settled status? - settled-status.html
router.post('/application-settled/durable/partnerSettled', function (req, res) {
  var partnerSettled = req.session.data['partner-settled']
  if (partnerSettled == "Yes"){
    res.redirect('address-lookup')
  }
  else if (partnerSettled == "No"){
    res.redirect('relationship-date')
  }
  else {
    res.redirect('settled-status')
  }
})

// Does your PARENT have UK settled status? - settled-status.html
router.post('/application-settled/parent/parentSettled', function (req, res) {
  var parentSettled = req.session.data['parent-settled']
  if (parentSettled == "Yes"){
    res.redirect('address-lookup')
  }
  else if (parentSettled == "No"){
    res.redirect('commence-date')
  }
  else {
    res.redirect('settled-status')
  }
})

// What is your partner's nationality? - nationality.html
router.post('/application-ni/durable/partnerNationality', function (req, res) {
  var partnerNationality = req.session.data['partnerNationality']
  if (partnerNationality == "UK"){
    res.redirect('ineligible')
  }
  else if (partnerNationality == "dual"){
    res.redirect('relationship-date')
  }
  else if (partnerNationality == "EU, EEA or Swiss"){
    res.redirect('relationship-date')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Does your spouse or civil partner live with you? (EUSS)
router.post('/application-settled/spouse/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('dob')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your partner live with you? (EUSS)
router.post('/application-settled/durable/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your spouse or civil partner live with you? NI
router.post('/application-ni/spouse/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Does your partner live with you? NI
router.post('/application-ni/durable/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('full-name')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('partner-address')
  }
})

// Did your relationship commence before 1 January 2021? (EUSS)
router.post('/application-settled/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes"){
    res.redirect('live-together')
  }
  else if (addAnother == "No"){
    res.redirect('ineligible2')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Did your relationship commence before 1 January 2021? NI
router.post('/application-ni/durable/relationshipDate', function (req, res) {
  var addAnother = req.session.data['relationship-date']
  if (addAnother == "Yes"){
    res.redirect('relationship-length')
  }
  else if (addAnother == "No"){
    res.redirect('ineligible2')
  }
  else {
    res.redirect('relationship-date')
  }
})

// Has the relationship existed for more than 2 years prior to 1 January 2021? - EUSS
router.post('/application-settled/durable/relationshipLength', function (req, res) {
  var relationshipLength = req.session.data['relationship-length']
  if (relationshipLength == "Yes"){
    res.redirect('live-together')
  }
  else if (relationshipLength == "No"){
    res.redirect('child-together')
  }
  else {
    res.redirect('relationship-length')
  }
})

// Has the relationship existed for more than 2 years prior to 1 January 2021? - NI
router.post('/application-ni/durable/relationshipLength', function (req, res) {
  var relationshipLength = req.session.data['relationship-length']
  if (relationshipLength == "Yes"){
    res.redirect('live-together')
  }
  else if (relationshipLength == "No"){
    res.redirect('child-together')
  }
  else {
    res.redirect('relationship-length')
  }
})

// Did you a have a child with your partner before 1 January 2021? EUSS
router.post('/application-settled/durable/childTogether', function (req, res) {
  var childTogether = req.session.data['child-together']
  if (childTogether == "Yes"){
    res.redirect('address-lookup')
  }
  else if (childTogether == "No"){
    res.redirect('ineligible3')
  }
  else {
    res.redirect('child-together')
  }
})

// Did you a have a child with your partner before 1 January 2021? NI
router.post('/application-ni/durable/childTogether', function (req, res) {
  var childTogether = req.session.data['child-together']
  if (childTogether == "Yes"){
    res.redirect('live-together')
  }
  else if (childTogether == "No"){
    res.redirect('ineligible3')
  }
  else {
    res.redirect('child-together')
  }
})

// Has your partner lived with you for 2 years or more? - live-together.html - EUSS
router.post('/application-settled/durable/durableLiving', function (req, res) {
  var durableLiving = req.session.data['durable-living']
  if (durableLiving == "Yes"){
    res.redirect('address-lookup')
  }
  else if (durableLiving == "No"){
    res.redirect('child-together')
  }
  else {
    res.redirect('live-together')
  }
})

// Does your partner live with you? - live-together.html - NI
router.post('/application-ni/durable/durableLiving', function (req, res) {
  var durableLiving = req.session.data['durable-living']
  if (durableLiving == "Yes"){
    res.redirect('dob')
  }
  else if (durableLiving == "No"){
    res.redirect('address-country')
  }
  else {
    res.redirect('live-together')
  }
})

// Does your partner live in the UK? - address-country.html - EUSS
router.post('/application-settled/durable/partnerCountry', function (req, res) {
  var partnerCountry = req.session.data['partner-country']
  if (partnerCountry == "Yes"){
    res.redirect('address-lookup')
  }
  else if (partnerCountry == "No"){
    res.redirect('ineligible4')
  }
  else {
    res.redirect('address-country')
  }
})

// Does your partner live in the UK? - address-country.html - NI
router.post('/application-ni/durable/partnerCountry', function (req, res) {
  var partnerCountry = req.session.data['partner-country']
  if (partnerCountry == "Yes"){
    res.redirect('address-lookup')
  }
  else if (partnerCountry == "No"){
    res.redirect('ineligible4')
  }
  else {
    res.redirect('address-country')
  }
})

// Do you want to add your PARTNER to your application? EUSS
router.post('/application-settled/addPartner', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    // res.redirect('partner/full-name')
    res.redirect('partner/married')
  }
  else {
    res.redirect('cya-individual')
  }
})

// Does your PARTNER live with you? (S1 only)
router.post('/application-s1/partner/partnerAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('email-address')
  }
  else {
    res.redirect('address-eu')
  }
})

// Do you want to add your CHILDREN to your application? 
// EUSS 
router.post('/application-settled/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    // res.redirect('add-parent')
    res.redirect('cya-family')
  }
})

// What is Millie's nationality? - EUSS (under 21)
router.post('/application-settled/child-1/childNationality', function (req, res) {
  var childNationality = req.session.data['child-nationality']
  if (childNationality == "UK"){
    res.redirect('address-manual')
  }
  else if (childNationality == "EU"){
    res.redirect('address-manual')
  }
  else if (childNationality == "Other"){
    res.redirect('address-manual')
  }
  else {
    res.redirect('nationality')
  }
})

// Do you want to add your CHILDREN to your application? 
// NI 
router.post('/application-ni/addChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
  }
})

// Is Millie dependant on you? CHILD
router.post('/application-settled/child-1/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes"){
    res.redirect('child-address')
  }
  else if (over21 == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Millie dependant on you? CHILD
router.post('/application-ni/child-1/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes"){
    res.redirect('child-address')
  }
  else if (over21 == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Freddie dependant on you? GRANDCHILD
router.post('/application-settled/grandchild/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes"){
    res.redirect('child-address')
  }
  else if (over21 == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Is Freddie dependant on you? GRANDCHILD - NI
router.post('/application-ni/grandchild/over21', function (req, res) {
  var over21 = req.session.data['over-21']
  if (over21 == "Yes"){
    res.redirect('child-address')
  }
  else if (over21 == "No"){
    res.redirect('ineligible')
  }
  else {
    res.redirect('over-21')
  }
})

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
router.post('/application-settled/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('nationality')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your CHILD live with you? (if eligible UK citizen, NO PARTNER)
router.post('/application-ni/child-1/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('nationality')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your GRANDCHILD live with you?
router.post('/application-settled/grandchild/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('nationality')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Does your GRANDCHILD live with you? - NI
router.post('/application-ni/grandchild/childAddress', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('nationality')
  }
  else if (addAnother == "No"){
    res.redirect('address-lookup')
  }
  else {
    res.redirect('ineligible')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// EUSS
router.post('/application-settled/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    // res.redirect('add-parent')
    res.redirect('child-1/cya-child')
  }
})

// Do you want to add ANOTHER CHILD to your application?
// NI
router.post('/application-ni/noPartnerAddAnotherChild', function (req, res) {
  var addAnother = req.session.data['add-another']
  if (addAnother == "Yes"){
    res.redirect('child-1/full-name')
  }
  else {
    res.redirect('add-parent')
  }
})


module.exports = router