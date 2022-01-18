const router = require('express').Router();

router.use('/something', (req, res) => {
  res.send('Something API');
});

module.exports = router;
