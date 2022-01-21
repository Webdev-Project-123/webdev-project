const R = require('ramda');
const db = require('../../models/db');
const renameKeys = require('../../common/renameKeys');

module.exports = {
  hot: async () => {
    const products = await db.get('products').value();

    // * Highest prices ~ * Hot trend products
    const byHighPrice = R.descend(R.prop('price'));
    const hotProducts = await R.compose(
      R.take(5),
      R.sort(byHighPrice),
    )(products);

    const DTO = {
      status: R.isEmpty(hotProducts) ? 410 : 200,
      message: 'Hot products are ready!',
      data: await R.map(
        R.compose(
          renameKeys({
            id: 'productId',
            title: 'productName',
            image: 'productImage',
            price: 'productPrice',
            discount: 'productSalePrice',
            rating: 'productRate',
          }),
          R.pickAll([
            'id',
            'title',
            'image',
            'price',
            'discount',
            'rating',
          ]),
        ),
      )(hotProducts),
    };

    return DTO;
  },

  // get: async (qId) => {
  //   const products = await db.get('products').value();


  // }
};
