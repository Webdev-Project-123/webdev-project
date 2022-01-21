const jwt = require('jsonwebtoken');

const publicKey = process.env.PUBLIC_KEY;

module.exports = {
  isValid: async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return {
        error: true,
        status: 401,
        msg: 'Invalid request',
      };
    }

    const user = await jwt.verify(token, publicKey);
    if (user.err) {
      return {
        error: true,
        status: 403,
        msg: 'Invalid request',
      };
    }

    next(user);
  },
};
