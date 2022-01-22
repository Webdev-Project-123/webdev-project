const createErr = require('http-errors');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

module.exports = {
  isValid: async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
        return next(createErr(401, 'UNAUTHORIZED'));
      }

      const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      req.valid = true;
      req.user = user;
      return next();
    } catch {
      return next(createErr(401, 'UNAUTHORIZED'));
    }
  },
  checkPermission: async (req, res, next) => {
    if (req.valid) {
      const userid = parseInt(req.params.userid, 10);
      if (!userid) {
        return next(createErr(404, 'PAGE NOT FOUND'));
      }

      req.params.userid = userid;
      const filterUser = await db.get('users').find({ id: userid }).value();
      if (!filterUser) {
        return next(createErr(404, 'PAGE NOT FOUND'));
      }

      if (filterUser.email !== req.user.email && req.user.role !== 'admin') {
        return next(createErr(401, 'UNAUTHORIZED'));
      }

      req.userid = req.params.userid;
      return next();
    }

    return next(createErr(404, 'PAGE NOT FOUND'));
  },
  isAdmin: (req, res, next) => {
    if (req.user.role !== 'admin') {
      return next(createErr(401, 'UNAUTHORIZED'));
    }
    return next();
  },
};