const R = require('ramda');
const createErr = require('http-errors');
const categoriesService = require('./service');

module.exports = {
  get: async (req, res, next) => {
    try {
      const DTO = await categoriesService.get(
        req.params.category,
      );

      if (R.equals(DTO.status, 400)) {
        next(createErr(400, 'BAD REQUEST'));
      } else res.status(200).json(DTO);
    } catch (err) {
      next(
        createErr(
          err.statusCode || 500,
          R.isNil(err.message)
            ? 'INTERNAL CATEGORIES GET METHOD ERROR'
            : R.toUpper(err.message),
        ),
      );
    }
  },
};
