// * Config environments ' variables
require('dotenv').config();

// * Import express module
const express = require('express');

// * Initialize express
const app = express();

// * Import morgan module
const morgan = require('morgan');

// * Import cors module
const cors = require('cors');

// * Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(cors());

// * Import path module
const path = require('path');

// * Serving static files in public folder
app.use(
  express.static(path.join(__dirname, '../client/build')),
);

// * Load the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// * Import ramda module
const R = require('ramda');

// * Get homepage
app.get('/', (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(__dirname, '../client/build/index.html'),
    );
});

// * Import api module, common module
const api = require('./api');

// * Routing
app.use('/api', api);

// * Error 404 handling
app.use((err, req, res, next) => {
  if (err) next(err);
  else {
    res
      .status(404)
      .sendFile(path.join(__dirname, './public/404.html'));
  }
});

app.use((err, req, res, next) => {
  if (R.equals(err.statusCode, 404)) {
    res
      .status(404)
      .sendFile(path.join(__dirname, './public/404.html'));
  } else next(err);
});

// * The other errors handling
app.use((err, req, res) => {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json(message);
});

module.exports = app;
