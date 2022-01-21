const boughtService = require('./service');

module.exports = {
  boughtInfo: async (req, res, next) => {
    const DTO = await boughtService.boughtInfo(req, res, next);
    const stt = DTO.statusCode ? DTO.statusCode : 500;
    res.status(stt).json({
      statusCode: DTO.statusCode,
      msg: DTO.msg,
      list: DTO.list,
    });
  },
};
