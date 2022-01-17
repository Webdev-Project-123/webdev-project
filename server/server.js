const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));

const R = require('ramda');

const f = (req, res, next) => {
  try {
    if (R.equals(req.body.name, 'Dicky')) next();
    else throw Error('Not Dicky!');
  } catch (e) {
    res.status(500).send(e.message);
  }
};

app.get('/', (req, res) => {
  res.send('Get successfully!');
});

app.post('/', f, (req, res) => {
  console.log(req.body.name);
  res.send('Post successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on ${PORT}`));
