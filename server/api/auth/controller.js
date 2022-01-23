const authService = require('./service');

const createErr = require("http-errors");

module.exports = {
  signup: async (req, res, next) => {
    try {
      const DTO = await authService.signup(req.body);
      const stt = DTO.statusCode ? DTO.statusCode : 500;
      res.status(stt).json({
        msg: DTO.msg,
        statusCode: DTO.statusCode,
      });
    } catch {
      res.status(500).json({
        statusCode: 500,
        msg: 'Error in signup',
      });
    }
  },
  login: async (req, res, next) => {
    try {
      const DTO = await authService.login(req.body);
      const stt = DTO.statusCode ? DTO.statusCode : 500;
      res.status(stt).json({
        id: DTO.id,
        accessToken: DTO.accessToken,
        refreshToken: DTO.refreshToken,
        msg: DTO.msg,
        statusCode: DTO.statusCode,
      });
    } catch {
      res.status(500).json({
        statusCode: 500,
        msg: 'Error in login',
      });
    }
  },
  token: async (req, res, next) => {
    try {
      const DTO = await authService.token(req.body);
      const stt = DTO.statusCode ? DTO.statusCode : 500;
      res.status(stt).json({
        accessToken: DTO.accessToken,
        msg: DTO.msg,
        statusCode: DTO.statusCode,
      });
    } catch {
      res.status(500).json({
        statusCode: 500,
        msg: 'Error in token',
      });
    }
  },

  forgetPassword: async (req, res, next) => {
    try {
      const DTO = await authService.forgetPassword(req.body);
      res.status(200).json(DTO);
    } catch (error) {
      next(createErr(500, error.msg));
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      const DTO = await authService.resetPassword(req.params.resetToken, req.body.newPassword);
      res.status(200).json(DTO);
    } catch (error) {
      next(createErr(500, error.msg));
    }
  }
};
