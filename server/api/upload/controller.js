const R = require('ramda');
const createErr = require('http-errors');
const uploadService = require('./service');

module.exports = {
  view: async (req, res, next) => {
    try {
      const DTO = await uploadService.view();

      if (R.equals(DTO.status, 400)) {
        next(createErr(400, 'BAD REQUEST'));
      } else res.status(200).json(DTO);
    } catch (err) {
      next(
        createErr(500, 'INTERNAL UPLOAD VIEW METHOD ERROR'),
      );
    }
  },

  add: async (req, res, next) => {
    try {
      const DTO = await uploadService.add(
        req.body,
        req.file.path,
      );

      res.status(200).json(DTO);
    } catch (err) {
      next(
        createErr(500, 'INTERNAL UPLOAD ADD METHOD ERROR'),
      );
    }
  },

  delete: async (req, res, next) => {
    try {
      const DTO = await uploadService.delete(req.body);

      res.status(200).json(DTO);
    } catch (err) {
      next(
        createErr(
          500,
          'INTERNAL UPLOAD DELETE METHOD ERROR',
        ),
      );
    }
  },
};
