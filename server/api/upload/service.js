const db = require('../../models/db');

module.exports = {
  view: () => {
    const list = db.get('products').value();

    let filterList = [];
    for (let i = 0; i < list.length; ++i) {
      filterList.push({
        productID: list[i].id,
        productName: list[i].title,
        productUploadDate: list[i]['publication-date'],
      });
    }

    return {
      list: filterList,
    };
  },
}