const R = require('ramda');
const createErr = require('http-errors');
const uploadService = require('./service');

module.exports = {
  view: async (req, res, next) => {
    const DTO = await uploadService.view();

    if (R.equals(DTO.status, 400)) {
      next(createErr(400, 'BAD REQUEST'));
    } else res.status(200).json(DTO);
  },

  update: async (req, res, next) => {
    const DTO = await uploadService.update(
      req.params.userId,
    );
  },

  delete: async (req, res, next) => {
    const DTO = await uploadService.view(req.params.userId);
  },
};
