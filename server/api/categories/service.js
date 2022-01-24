const R = require('ramda');
const db = require('../../models/db');
const renameKeys = require('../../common/renameKeys');

module.exports = {
  get: async (category) => {
    try {
      const products = await db.get('products').value();

      // * Filter products by category
      const byCategory = R.compose(
        R.any(R.equals(R.__, category)),
        R.map(R.toLower),
        R.prop('categories'),
      );
      const productsByCategory = R.equals(category, 'all')
        ? products
        : await R.filter(byCategory)(products);

      // * Return 400 'Missing products by category' error
      if (R.isEmpty(productsByCategory)) return { status: 400 };

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
        )(productsByCategory),
      };

      return DTO;
    } catch (err) {
      return err;
    }
  },
};
