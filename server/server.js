// * Config environments ' variables
require("dotenv").config();

// * Import express module
const express = require("express");

// * Initialize express
const app = express();

// * Import morgan module
const morgan = require("morgan");

// * Import cors module
const cors = require("cors");

// * Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors());

// * Import path module
const path = require("path");

// * Serving static files in public folder
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "../client/build")));
=======
app.use(
  // express.static(path.join(__dirname, '../client/build')),
  express.static(path.join(__dirname, './public')),
);
>>>>>>> origin/server

// * Load the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// * Get homepage
<<<<<<< HEAD
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/build/index.html"));
=======
app.get('/', (req, res) => {
  // res
  //   .status(200)
  //   .sendFile(
  //     path.join(__dirname, '../client/build/index.html'),
  //   );
  res.status(200).redirect('homepage/index.html');
>>>>>>> origin/server
});

// * Import api module, common module
const api = require("./api");

// * Routing
app.use("/api", api);

// * Error 404 handling
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public/404.html"));
});

// * The other errors handling
app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json({
    status: statusCode || 500,
    message: message || "INTERNAL SERVER ERROR",
  });
});

module.exports = app;
