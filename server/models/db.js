// * Import low module
const lowdb = require('lowdb');

// * Import FileSync module
const FileSync = require('lowdb/adapters/FileSync');

// * Initialize db
const db = lowdb(new FileSync('db.json'));

module.exports = db;
