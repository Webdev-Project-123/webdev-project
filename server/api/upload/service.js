const R = require('ramda');
const db = require('../../models/db');
const renameKeys = require('../../common/renameKeys');
const parseObject = require('../../common/parseObject');

module.exports = {
  view: async () => {
    try {
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
    } catch (err) {
      return err;
    }
  },

  add: async (body, url) => {
    try {
      const products = await db.get('products').value();

      // * parse the body
      const product = await parseObject(body);

      // * Get the last product
      const lastProduct = await R.last(products);

      // * Add missing fields to the new product
      const addMissingFields = R.mergeLeft({
        image: url,
        rating: [],
        comments: [],
        id: R.compose(R.add(1), R.prop('id'))(lastProduct),
      });

      // * Initialize new product
      const newProduct = await R.compose(
        addMissingFields,
        renameKeys({
          productName: 'title',
          productPrice: 'price',
          productPages: 'pages',
          productAuthors: 'authors',
          productDesc: 'description',
          productInStock: 'in-stock',
          productLanguage: 'language',
          productSalePrice: 'discount',
          productCategories: 'categories',
          productUploadDate: 'uploaded-date',
          productPublishDate: 'publication-date',
          productPublishComp: 'publishing-company',
        }),
      )(product);

      await db.get('products').push(newProduct).write();

      const DTO = {
        status: 200,
        message: 'OK',
      };

      return DTO;
    } catch (err) {
      return err;
    }
  },

  delete: async ({ productIds }) => {
    try {
      const remove = async (productId) => {
        await db
          .get('products')
          .remove({ id: productId })
          .write();
      };

      await R.forEach(remove)(productIds);

      const DTO = {
        status: 200,
        message: 'OK',
      };

      return DTO;
    } catch (err) {
      return err;
    }
  },
};
