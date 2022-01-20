// * Import low module
const low = require('lowdb');

// * Import FileSync module
const FileSync = require('lowdb/adapters/FileSync');

// * Initialize db
const adapter = new FileSync('../models/db.json');
const db = low(adapter);

module.exports = db;
