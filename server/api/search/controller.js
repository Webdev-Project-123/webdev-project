const R = require('ramda');
const createErr = require('http-errors');
const searchService = require('./service');

module.exports = {
  search: async (req, res, next) => {
    try {
      const DTO = await searchService.search(
        req.query.name,
      );

      if (R.equals(DTO.status, 400)) {
        next(createErr(400, 'BAD REQUEST'));
      } else res.status(200).send(DTO);
    } catch (err) {
      next(
        createErr(
          err.statusCode || 500,
          R.isNil(err.message)
            ? 'INTERNAL SEARCH SEARCH METHOD ERROR'
            : R.toUpper(err.message),
        ),
      );
    }
  },
};
