const R = require('ramda');
const db = require('../../models/db');
const renameKeys = require('../../common/renameKeys');

module.exports = {
  view: async () => {
    const products = await db.get('products').value();

    // * Get all uploaded products
    const uploadedProducts = await R.map(
      R.compose(
        renameKeys({
          id: 'productId',
          title: 'productName',
          'uploaded-date': 'productUploadDate',
        }),
        R.pickAll(['id', 'title', 'uploaded-date']),
      ),
    )(products);

    // * Return 400 'Missing uploaded products' error
    if (R.isEmpty(uploadedProducts)) return { status: 400 };

    const DTO = {
      status: 200,
      message: 'OK',
      data: uploadedProducts,
    };

    return DTO;
  },
};
