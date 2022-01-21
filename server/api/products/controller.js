const R = require('ramda');
const createErr = require('http-errors');
const productsService = require('./service');

module.exports = {
  hot: async (req, res, next) => {
    const DTO = await productsService.hot();
    R.when(
      R.equals(DTO.status, 404),
      next(createErr(404, 'Products not found')),
    );
  },
};
