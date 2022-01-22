const R = require('ramda');
const createErr = require('http-errors');
const uploadService = require('./service');

module.exports = {
  view: async (req, res, next) => {
    //const DTO = await uploadService.view(req.params.userId);
    res.send(req.params.userId);

    if (R.equals(DTO.status, 401)) {
      next(createErr(401, 'UNAUTHORIZED'));
    }
  },

  update: async (req, res, next) => {
    const DTO = await uploadService.update(req.params.userId);

    if (R.equals(DTO.status, 401)) {
      next(createErr(401, 'UNAUTHORIZED'));
    }
  },

  delete: async (req, res, next) => {
    const DTO = await uploadService.view(req.params.userId);

    if (R.equals(DTO.status, 401)) {
      next(createErr(401, 'UNAUTHORIZED'));
    }
  },
};
