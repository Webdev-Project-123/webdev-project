const router = require('express').Router();

// const S = require('sanctuary');
// const $ = require('sanctuary-def');

router.get('/something', async (req, res) => {
  res.send('OK');
});

module.exports = router;
