const R = require('ramda');

const ascSort = R.sort(R.ascend(R.identity));

const hasEnoughKeyNames = (keynames) => (obj) => R.equals(ascSort(keynames), ascSort(R.keys(obj)));

module.exports = hasEnoughKeyNames;
