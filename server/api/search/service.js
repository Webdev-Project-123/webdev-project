const R = require('ramda');
const S = require('sanctuary');
const db = require('../../models/db');
const renameKeys = require('../../common/renameKeys');

module.exports = {
  search: async (name) => {
    try {
      const products = await db.get('products').value();

      // * Filter products by name
      const regex = S.regex('i')(name);
      const byName = R.compose(
        S.test(regex),
        // R.toLower,
        R.prop('title'),
      );
      const productsByName = await R.filter(byName)(
        products,
      );

      // * Return 400 'Missing search results' error
      if (R.isEmpty(productsByName)) return { status: 400 };

      const DTO = {
        status: 200,
        message: 'OK',
        data: await R.map(
          R.compose(
            renameKeys({
              id: 'productId',
              title: 'productName',
              image: 'productImage',
              price: 'productPrice',
              rating: 'productRate',
              discount: 'productSalePrice',
            }),
            R.pickAll([
              'id',
              'title',
              'image',
              'price',
              'rating',
              'discount',
            ]),
          ),
        )(productsByName),
      };

      return DTO;
    } catch (err) {
      return err;
    }
  },
};
