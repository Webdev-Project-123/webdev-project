const R = require('ramda');

// * Remove string-text format

const parsedToArrayList = [
  'productAuthors',
  'productCategories',
];

const parsedToNumberList = [
  'productPages',
  'productPrice',
  'productInStock',
  'productSalePrice',
];

const removeHeadSquareBracket = R.when(
  (val) => R.equals(R.head(val), '['),
)(R.drop(1));

const removeLastSquareBracket = R.when(
  (val) => R.equals(R.last(val), ']'),
)(R.dropLast(1));

const toArray = R.compose(
  R.map(R.replace(/"/g, '')),
  R.split(','),
  removeLastSquareBracket,
  removeHeadSquareBracket,
);

const parseArray = R.mapObjIndexed((idx, key, obj) => {
  if (R.any(R.equals(key, R.__))(parsedToArrayList)) {
    return toArray(obj[key]);
  }
  return obj[key];
});

const parseNumber = R.mapObjIndexed((idx, key, obj) => {
  if (R.any(R.equals(key, R.__))(parsedToNumberList)) {
    return +obj[key];
  }
  return obj[key];
});

const parseObject = R.compose(parseArray, parseNumber);

module.exports = parseObject;
