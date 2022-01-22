const R = require('ramda');
const createErr = require('http-errors');
const searchService = require('./service');

module.exports = {
  search: async (req, res, next) => {
    //  const DTO = await searchService.search(req.query.name);

    //  if (R.equals(DTO.status, 400)) {
    //    next(createErr(400, 'BAD REQUEST'));
    //  } else res.status(200).send(DTO);
    console.log(req.query.name);
  },
};
