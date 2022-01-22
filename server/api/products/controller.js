const R = require('ramda');
const createErr = require('http-errors');
const productsService = require('./service');

module.exports = {
  hot: async (req, res, next) => {
    const DTO = await productsService.hot();

    if (R.equals(DTO.status, 400)) {
      next(createErr(400, 'BAD REQUEST'));
    } else res.status(200).json(DTO);
  },

  get: async (req, res, next) => {
    const DTO = await productsService.get(
      req.params.prodId,
    );

    if (R.equals(DTO.status, 400)) {
      next(createErr(400, 'BAD REQUEST'));
    } else res.status(200).json(DTO);
  },
};
