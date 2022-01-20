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

// // * Serving static files in public folder
// app.use(express.static(path.join(__dirname, 'public')));

// * Serving static files in public folder
app.use(
  express.static(path.join(__dirname, '../client/build')),
);

// * Import ramda module
const R = require('ramda');

// // * Import Sanctuary module
// const S = require('sanctuary');

// * Load the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// // * Import http-errors module
// const createError = require('http-error');

// * Get homepage
app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../client/build/index.html'),
    (err) => {
      R.when(
        err,
        res
          .status(404)
          .sendFile(
            path.join(__dirname, './public/404.html'),
          ),
      );
    },
  );
});

// * Import api module
const api = require('./api');

// * Routing
app.use('/api', api);

module.exports = app;
