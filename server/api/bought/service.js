const db = require('../../models/db');

module.exports = {
  boughtInfo: async (req, res, next) => {
    try {
      const list = await db.get('users').find({ id: req.userid }).value();
      return {
        error: false,
        statusCode: 200,
        msg: 'OK',
        list: list.bought,
      };
    } catch {
      return {
        statusCode: 500,
        msg: 'Error in boughtInfo',
      };
    }
  },
};
