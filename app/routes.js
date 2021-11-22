// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
  req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
  req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
  res.locals.folder = req.folder; // what folder the url is
  res.locals.subfolder = req.subfolder; // what subfolder the URL is in
console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});


// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));
router.use('/current/apply', require('./views/current/apply/_routes'));
router.use('/current/replacement', require('./views/current/replacement/_routes'));
router.use('/current/file-upload', require('./views/current/file-upload/_routes'));

// router.use('/current_v2/apply', require('./views/current_v2/apply/_routes'));
// router.use('/current/prereg', require('./views/current/prereg/_routes'));
// router.use('/current/postjan', require('./views/current/postjan/_routes'));


// Start folder specific routes
// ----------------------------

// Basic journeys
router.use('/sprint-001', require('./views/sprint-001/_routes'));
router.use('/sprint-002', require('./views/sprint-002/_routes'));
router.use('/sprint-003', require('./views/sprint-003/_routes'));
router.use('/sprint-004', require('./views/sprint-004/_routes'));
router.use('/sprint-005', require('./views/sprint-005/_routes'));
router.use('/sprint-006', require('./views/sprint-006/_routes'));
router.use('/sprint-007', require('./views/sprint-007/_routes'));

// Pre-registration and post-january application journeys
router.use('/sprint-008/prereg', require('./views/sprint-008/prereg/_routes'));
router.use('/sprint-008/postjan', require('./views/sprint-008/postjan/_routes'));

router.use('/sprint-009/prereg', require('./views/sprint-009/prereg/_routes'));
router.use('/sprint-009/postjan', require('./views/sprint-009/postjan/_routes'));

router.use('/sprint-010/prereg', require('./views/sprint-010/prereg/_routes'));
router.use('/sprint-010/postjan', require('./views/sprint-010/postjan/_routes'));

router.use('/sprint-011/prereg', require('./views/sprint-011/prereg/_routes'));
router.use('/sprint-011/postjan', require('./views/sprint-011/postjan/_routes'));

router.use('/sprint-012/prereg', require('./views/sprint-012/prereg/_routes'));
router.use('/sprint-012/postjan', require('./views/sprint-012/postjan/_routes'));

router.use('/sprint-013/prereg', require('./views/sprint-013/prereg/_routes'));
router.use('/sprint-013/postjan', require('./views/sprint-013/postjan/_routes'));

router.use('/sprint-014/prereg', require('./views/sprint-014/prereg/_routes'));
router.use('/sprint-014/postjan', require('./views/sprint-014/postjan/_routes'));

router.use('/sprint-015/prereg', require('./views/sprint-015/prereg/_routes'));
router.use('/sprint-015/postjan', require('./views/sprint-015/postjan/_routes'));

// One application journeys
router.use('/sprint19-20/apply', require('./views/sprint19-20/apply/_routes'));
router.use('/sprint21/apply', require('./views/sprint21/apply/_routes'));
router.use('/sprint22/apply', require('./views/sprint22/apply/_routes'));
router.use('/sprint23-24/apply', require('./views/sprint23-24/apply/_routes'));
router.use('/sprint26/apply', require('./views/sprint26/apply/_routes'));
router.use('/sprint27/apply', require('./views/sprint27/apply/_routes'));
router.use('/sprint28/apply', require('./views/sprint28/apply/_routes'));

// Separated application and 'get replacement' journeys
router.use('/sprint33', require('./views/sprint33/_routes'));
router.use('/sprint33/apply', require('./views/sprint33/apply/_routes'));
router.use('/sprint33/replacement', require('./views/sprint33/replacement/_routes'));

// Separated application, 'get replacement' and file upload journeys
router.use('/sprint34', require('./views/sprint34/_routes'));
router.use('/sprint34/apply', require('./views/sprint34/apply/_routes'));
router.use('/sprint34/replacement', require('./views/sprint34/replacement/_routes'));
router.use('/sprint34/file-upload', require('./views/sprint34/file-upload/_routes'));

router.use('/sprint35', require('./views/sprint35/_routes'));
router.use('/sprint35/apply', require('./views/sprint35/apply/_routes'));
router.use('/sprint35/replacement', require('./views/sprint35/replacement/_routes'));
router.use('/sprint35/file-upload', require('./views/sprint35/file-upload/_routes'));

router.use('/sprint36', require('./views/sprint36/_routes'));
router.use('/sprint36/apply', require('./views/sprint36/apply/_routes'));
router.use('/sprint36/replacement', require('./views/sprint36/replacement/_routes'));
router.use('/sprint36/file-upload', require('./views/sprint36/file-upload/_routes'));

router.use('/sprint-037', require('./views/sprint-037/_routes'));
router.use('/sprint-037/apply', require('./views/sprint-037/apply/_routes'));
router.use('/sprint-037/replacement', require('./views/sprint-037/replacement/_routes'));
router.use('/sprint-037/file-upload', require('./views/sprint-037/file-upload/_routes'));

router.use('/sprint-038', require('./views/sprint-038/_routes'));
router.use('/sprint-038/apply', require('./views/sprint-038/apply/_routes'));
router.use('/sprint-038/replacement', require('./views/sprint-038/replacement/_routes'));
router.use('/sprint-038/file-upload', require('./views/sprint-038/file-upload/_routes'));
//


//pulling data through


// Experimental //
// ----------------------------

// tasklist format //
router.use('/tasklist/prereg', require('./views/tasklist/prereg/_routes'));
router.use('/tasklist/postjan', require('./views/tasklist/postjan/_routes'));



module.exports = router;




