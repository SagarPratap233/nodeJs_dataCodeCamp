const _ = require('lodash');

const nonFlattened = [1,[2,[3,[4]]]];
const flattened = _.flattenDeep(nonFlattened);
console.log(flattened);