const router = require('express').Router();

const R = require('ramda');
const db = require('../models/db');

router.get('/something', (req, res) => {
  const users = db.get('users').value()[0];
  const cart = R.path(['cart'])(users);
  console.log(cart);
  res.send('OK');
});

const auth = require('./auth');

router.use('/auth', auth);

module.exports = router;
