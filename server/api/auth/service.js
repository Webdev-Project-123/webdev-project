const bcrypt = require('bcrypt');
const db = require('../../db.json');

module.exports = {
  signup: async (body) => {
    let filterUser = db.users.filter((user) => user.email === body.email);

    if (filterUser.length > 0) {
      return {
        error: true,
        msg: 'Email is already existed',
      };
    }

    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(body.password, salt);
    let objectUser = await {
      id: db.users.length + 1,
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
    await db.users.push(objectUser);

    await db.users.forEach((user) => {
      console.log(user);
    });

    return {
      error: false,
      msg: 'Success',
    };
  },
  login: () => {},
};
