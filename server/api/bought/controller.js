const boughtService = require('./service');
const createErr = require('http-errors');

module.exports = {
  boughtInfo: async (req, res, next) => {
    const DTO = await boughtService.boughtInfo(req, res, next);
    const stt = DTO.statusCode ? DTO.statusCode : 500;
    if (stt === 400) next(createErr(404, 'PAGE NOT FOUND'));
    res.status(stt).json({
      statusCode: stt,
      msg: DTO.msg,
      list: DTO.list,
    });
  },
};
