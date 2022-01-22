const R = require('ramda');
const db = require('../../models/db');
const renameKeys = require('../../common/renameKeys');

module.exports = {
  search: async (name) => {
    const products = await db.get('products').value();

   //  // * Filter products by name
   //  const byName = R.compose
  },
};
