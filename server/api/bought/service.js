const db = require('../../models/db');

module.exports = {
  boughtInfo: async (email) => {
    try {
      const list = await db.get('users').find({ email }).value().bought;
      let finalList = [];
      list.forEach((product) => {
        finalList.push({
          productID: product.id,
          productName: product.title,
          productBoughtPrice: product.discount,
          productBoughtQuantity: product.quantity,
          productBoughtDate: product.date,
        });
      });

      return {
        error: false,
        statusCode: 200,
        msg: 'OK',
        list: finalList,
      };
    } catch {
      return {
        statusCode: 500,
        msg: 'Error in boughtInfo',
      };
    }
  },
};
