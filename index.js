const _ = require('lodash')

const newItems = [1,[2,[3,[4,[5,[6]]]]]];

const flat = _.flattenDeep(newItems);

console.log(flat);