const authService = require('./service');

module.exports = {
  signup: async (req, res, next) => {
    const DTO = await authService.signup(req.body);
    const stt = DTO.statusCode ? DTO.statusCode : 500;
    res.status(stt).json({
      msg: DTO.msg,
      statusCode: DTO.statusCode,
    });
  },
  login: async (req, res, next) => {
    const DTO = await authService.login(req.body);
    const stt = DTO.statusCode ? DTO.statusCode : 500;
    res.status(stt).json({
      accessToken: DTO.accessToken,
      refreshToken: DTO.refreshToken,
      msg: DTO.msg,
      statusCode: DTO.statusCode,
    });
  },
  token: async (req, res, next) => {
    const DTO = await authService.token(req.body);
    const stt = DTO.statusCode ? DTO.statusCode : 500;
    res.status(stt).json({
      accessToken: DTO.accessToken,
      msg: DTO.msg,
      statusCode: DTO.statusCode,
    });
  },
};
