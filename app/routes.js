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
router.use('/sprint-019/apply', require('./views/sprint-019/apply/_routes'));
router.use('/sprint-021/apply', require('./views/sprint-021/apply/_routes'));
router.use('/sprint-022/apply', require('./views/sprint-022/apply/_routes'));
router.use('/sprint-023/apply', require('./views/sprint-023/apply/_routes'));
router.use('/sprint-026/apply', require('./views/sprint-026/apply/_routes'));
router.use('/sprint-027/apply', require('./views/sprint-027/apply/_routes'));
router.use('/sprint-028/apply', require('./views/sprint-028/apply/_routes'));

// Separated application and 'get replacement' journeys
router.use('/sprint-033', require('./views/sprint-033/_routes'));
router.use('/sprint-033/apply', require('./views/sprint-033/apply/_routes'));
router.use('/sprint-033/replacement', require('./views/sprint-033/replacement/_routes'));

// Separated application, 'get replacement' and file upload journeys
router.use('/sprint-034', require('./views/sprint-034/_routes'));
router.use('/sprint-034/apply', require('./views/sprint-034/apply/_routes'));
router.use('/sprint-034/replacement', require('./views/sprint-034/replacement/_routes'));
router.use('/sprint-034/file-upload', require('./views/sprint-034/file-upload/_routes'));

router.use('/sprint-035', require('./views/sprint-035/_routes'));
router.use('/sprint-035/apply', require('./views/sprint-035/apply/_routes'));
router.use('/sprint-035/replacement', require('./views/sprint-035/replacement/_routes'));
router.use('/sprint-035/file-upload', require('./views/sprint-035/file-upload/_routes'));

router.use('/sprint-036', require('./views/sprint-036/_routes'));
router.use('/sprint-036/apply', require('./views/sprint-036/apply/_routes'));
router.use('/sprint-036/replacement', require('./views/sprint-036/replacement/_routes'));
router.use('/sprint-036/file-upload', require('./views/sprint-036/file-upload/_routes'));

router.use('/sprint-037', require('./views/sprint-037/_routes'));
router.use('/sprint-037/apply', require('./views/sprint-037/apply/_routes'));
router.use('/sprint-037/replacement', require('./views/sprint-037/replacement/_routes'));
router.use('/sprint-037/file-upload', require('./views/sprint-037/file-upload/_routes'));

router.use('/sprint-038', require('./views/sprint-038/_routes'));
router.use('/sprint-038/apply', require('./views/sprint-038/apply/_routes'));
router.use('/sprint-038/replacement', require('./views/sprint-038/replacement/_routes'));
router.use('/sprint-038/file-upload', require('./views/sprint-038/file-upload/_routes'));

router.use('/sprint-039', require('./views/sprint-039/_routes'));
router.use('/sprint-039/apply', require('./views/sprint-039/apply/_routes'));
router.use('/sprint-039/replacement', require('./views/sprint-039/replacement/_routes'));
router.use('/sprint-039/file-upload', require('./views/sprint-039/file-upload/_routes'));
//


//pulling data through


// Experimental //
// ----------------------------

// tasklist format //
router.use('/tasklist/prereg', require('./views/tasklist/prereg/_routes'));
router.use('/tasklist/postjan', require('./views/tasklist/postjan/_routes'));

// nationality //
router.use('/nationality', require('./views/nationality/_routes'));




module.exports = router;




