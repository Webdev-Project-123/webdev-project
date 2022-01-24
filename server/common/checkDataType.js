const R = require('ramda');
const S = require('sanctuary');
const $ = require('sanctuary-def');

const def = $.create({ checkTypes: true, env: $.env });

const Comment = $.RecordType({
  name: $.String,
  stars: $.Integer,
  avatar: $.String,
  content: $.String,
});

const Product = $.RecordType({
  productId: $.Integer,
  productName: $.String,
  productPages: $.Integer,
  productImage: $.String,
  productPrice: $.Number,
  productRate: $.Array($.Integer),
  productAuthors: $.Array($.String),
  productDesc: $.String,
  productLanguage: $.String,
  productComments: $.Array(Comment),
  productSalePrice: $.Number,
  productInStock: $.Integer,
  productCategories: $.Array($.String),
  productPublishDate: $.String,
  productPublishComp: $.String,
});

const checkDataType = (req, res, next) => {

};
