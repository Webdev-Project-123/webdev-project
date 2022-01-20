const router = require('express').Router();

// const S = require('sanctuary');
// const $ = require('sanctuary-def');

router.use('/something', (req, res) => {
  res.send('OK');
});

module.exports = router;
