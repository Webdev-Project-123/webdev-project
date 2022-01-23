const db = require('../../models/db');

module.exports = {
  boughtInfo: async (userid) => {
    const user = await db
      .get('users')
      .find({ id: userid })
      .value();

    return {
      status: 200,
      message: 'OK',
      data: user.bought,
    };
  },
};
