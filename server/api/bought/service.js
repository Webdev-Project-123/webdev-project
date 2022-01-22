const db = require('../../models/db');

module.exports = {
  boughtInfo: async (req, res, next) => {
    const list = db.get('users').find({ id: req.userid }).value();
    console.log(req.userid);
    return {
      error: false,
      statusCode: 200,
      msg: 'OK',
      list: list.bought,
    };
  },
};
