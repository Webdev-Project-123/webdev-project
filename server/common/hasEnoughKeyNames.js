const R = require('ramda');
const createErr = require('http-errors');

const ascSort = R.sort(R.ascend(R.identity));

const hasEnoughKeyNames = (keynames) => (obj) => {
  if (R.equals(ascSort(keynames), ascSort(R.keys(obj)))) {
    return;
  }
  return createErr(
    400,
    'NOT HAVE ENOUGH OR WRONG KEY NAMES',
  );
};

module.exports = hasEnoughKeyNames;
