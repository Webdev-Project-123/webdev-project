const R = require('ramda');
const createErr = require('http-errors');
const boughtService = require('./service');

module.exports = {
  boughtInfo: async (req, res, next) => {
    const DTO = await boughtService.boughtInfo(req.userid);

    if (R.equals(DTO.status, 200)) {
      res.status(200).json(DTO);
    } else next(createErr(503, 'SERVICE UNAVAILABLE'));
  },
};
