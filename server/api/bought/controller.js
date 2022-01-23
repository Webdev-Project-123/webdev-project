const boughtService = require('./service');

module.exports = {
  boughtInfo: async (req, res, next) => {
    try {
      const DTO = await boughtService.boughtInfo(req, res, next);
      const stt = DTO.statusCode ? DTO.statusCode : 500;
      res.status(stt).json({
        statusCode: stt,
        msg: DTO.msg,
        list: DTO.list,
      });
    } catch {
      res.status.json({
        statusCode: 500,
        msg: 'Error in boughtInfo',
      });
    }
  },
};
