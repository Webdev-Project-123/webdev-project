const jwt = require('jsonwebtoken');

module.exports = {
  isValid: async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        return {
          error: true,
          status: 401,
          msg: 'Invalid request',
        };
      }

      const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.valid = true;
      req.user = user;
      next();
    } catch (err) {
      res.status(403).json({
        statusCode: 403,
        msg: 'FORBIDDEN',
      });
    }
  },
};
