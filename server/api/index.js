const router = require('express').Router();

// const R = require('ramda');
const db = require('../models/db');

router.get('/something', async (req, res) => {
  await db.get('users').push({ id: 123 }).write();
  const users = await db.get('users').value();
  // const cart = R.path(['cart'])(users);
  console.log(users);
  res.send('OK');
});

module.exports = router;
