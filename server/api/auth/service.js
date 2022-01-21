const bcrypt = require('bcrypt');
const db = require('../../models/db');

module.exports = {
  signup: async (body) => {
    let users = await db.get('users').value();
    let filterUser = await users.filter((user) => user.email === body.email);

    if (filterUser.length > 0) {
      return {
        error: true,
        msg: 'Email is already existed',
      };
    }

    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(body.password, salt);
    let objectUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
      password: hashPassword,
      phone: body.phone,
      address: body.address,
      avatar: '', // chưa làm
      role: 'user',
      cart: [],
      bought: [],
    };

    await db.get('users').push(objectUser).write();

    return {
      error: false,
      msg: 'Success',
    };
  },
  login: async (body) => {
    let users = await db.get('users').value();
    let filterUser = await users.filter((user) => user.email === body.email);
    if (filterUser.length === 1) {
      const cmpResult = await bcrypt.compare(body.password, filterUser[0].password);

      if (cmpResult.err) {
        return {
          error: true,
          msg: cmpResult.err,
        };
      }

      if (cmpResult) {
        return {
          error: false,
          msg: 'Welcome back',
        };
      }

      if (!cmpResult) {
        return {
          error: true,
          msg: 'Wrong password or email address',
        };
      }
    } else if (filterUser.length === 0) {
      return {
        error: true,
        msg: 'Wrong password or email address',
      };
    }
  },
};
