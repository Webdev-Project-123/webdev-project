const authService = require('./service');

module.exports = {
  signup: async (req, res) => {
    const DTO = await authService.signup(req.body);
    const stt = DTO.error ? 500 : 200;
    res.status(stt).json(DTO.msg);
  },
  login: async (req, res) => {
    const DTO = await authService.login(req.body);
    const stt = DTO.error ? 500 : 200;
    res.status(stt).json(DTO.msg);
  },
};
