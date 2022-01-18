// * Config environments ' variables
require('dotenv').config();

// * Import express module
const express = require('express');

// * Initialize express
const app = express();

// * Import morgan module
const morgan = require('morgan');

// * Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));

// * Import path module
const path = require('path');

// * Serving static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// * Import ramda module
const R = require('ramda');

// * Import Sanctuary module
const S = require('sanctuary');

// * Load the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  S.show(`Server running on ${PORT}`);
});

// * Get homepage
app.get('/', (req, res) => {
  res.status(200).redirect('/homepage/index.html');
});

// * Import api module
const api = require('./src/api');

// * Routing
app.use('/api', api);

// * Error handling
app.use((req, res) => {
  res.status(404).redirect('404.html');
});
