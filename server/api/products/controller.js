const R = require('ramda');
const createErr = require('http-errors');
const productsService = require('./service');

module.exports = {
  hot: async (req, res, next) => {
    const DTO = await productsService.hot();

    if (R.equals(DTO.status, 410)) next(createErr(410, 'Products gone'));
    else res.status(200).json(DTO);
  },

  get: async (req, res, next) => {
    const DTO = await productsService.get(req.params.id);

    if (R.equals(DTO.status, 410)) next(createErr(410, 'Product gone'));
    else res.status(200).json(DTO);
  },
};
