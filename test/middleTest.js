const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');

// TEST CODE
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2, 3, 9, 7, 9]), [3, 9]));
console.log(assertArrayEqual(middle([4, 2]), []));
console.log(assertArrayEqual(middle([4]), []));