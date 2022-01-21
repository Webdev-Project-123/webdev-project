const bcrypt = require('bcrypt');
const db = require('../../models/db');
// const db = require('../../db.json');

module.exports = {
  signup: async (body) => {
    let users = db.get('users').value();
    let filterUser = users.filter((user) => user.email === body.email);

    if (filterUser.length > 0) {
      return {
        error: true,
        msg: 'Email is already existed',
      };
    }

    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(body.password, salt);
    let objectUser = await {
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
    // console.log(objectUser);
    await db.get('users').push(objectUser).write();

    // await db.get('users').value().forEach((user) => {
    //   console.log(user);
    // });

    return {
      error: false,
      msg: 'Success',
    };
  },
  login: async (body) => {
    console.log(body);
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
        msg: 'Please signup before login',
      };
    }
  },
};
