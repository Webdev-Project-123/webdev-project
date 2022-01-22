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
      status: R.isEmpty(hotProducts) ? 410 : 304,
      message: 'Hot products are ready!',
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
      )(hotProducts),
    };

    return DTO;
  },

  get: async (id) => {
    const products = await db.get('products').value();

    // * Get product by id
    const product = await R.find(
      R.propEq('id', parseInt(id, 10)),
    )(products);

    const DTO = {
      status: R.isNil(product) ? 410 : 304,
      message: 'Product is ready!',
      data: await renameKeys({
        id: 'productId',
        title: 'productName',
        pages: 'productPages',
        image: 'productImage',
        price: 'productPrice',
        rating: 'productRate',
        authors: 'productAuthors',
        description: 'productDesc',
        language: 'productLanguage',
        comments: 'productComments',
        discount: 'productSalePrice',
        'in-stock': 'productInStock',
        categories: 'productCategories',
        'publication-date': 'productPublishDate',
        'publishing-company': 'productPublishComp',
      })(product),
    };

    return DTO;
  },
};
