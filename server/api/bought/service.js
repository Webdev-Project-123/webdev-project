const db = require('../../models/db');

module.exports = {
  boughtInfo: async (req, res, next) => {
    const userid = parseInt(req.params.userid);
    
    if (!userid) {
      return {
        error: true,
        msg: 'Invalid parameter',
      };
    }

    const users = await db.get('users').value();
    const filterUser = users.filter((user) => user.id === userid);

    if (filterUser.length !== 1) {
      return {
        error: true,
        statusCode: 404,
        msg: 'PAGE NOT FOUND',
      };
    }

    if (filterUser[0].email !== req.user.email && req.user.role !== 'admin') {
      return {
        statusCode: 403,
        msg: 'FORBIDDEN',
      };
    }

    return {
      error: false,
      statusCode: 200,
      msg: 'OK',
      list: filterUser[0].bought,
    };
  },
};
