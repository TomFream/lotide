const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test one or two elements
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));

// Test odd
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

// Test even
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));