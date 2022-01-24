const R = require('ramda');
const createErr = require('http-errors');
const productsService = require('./service');

module.exports = {
  hot: async (req, res, next) => {
    try {
      const DTO = await productsService.hot();

      if (R.equals(DTO.status, 400)) {
        next(createErr(400, 'BAD REQUEST'));
      } else res.status(200).json(DTO);
    } catch (err) {
      next(
        createErr(
          err.statusCode || 500,
          R.isNil(err.message)
            ? 'INTERNAL PRODUCTS HOT METHOD ERROR'
            : R.toUpper(err.message),
        ),
      );
    }
  },

  get: async (req, res, next) => {
    try {
      const DTO = await productsService.get(
        req.params.prodId,
      );

      if (R.equals(DTO.status, 400)) {
        next(createErr(400, 'BAD REQUEST'));
      } else res.status(200).json(DTO);
    } catch (err) {
      next(
        createErr(
          err.statusCode || 500,
          R.isNil(err.message)
            ? 'INTERNAL PRODUCTS GET METHOD ERROR'
            : R.toUpper(err.message),
        ),
      );
    }
  },
};
