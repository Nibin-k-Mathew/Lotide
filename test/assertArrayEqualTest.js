const assertArrayEqual = require('../assertArrayEqual');
//Testcode
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [1, 4]);
assertArrayEqual([4, 2, 3], [4, '2', 3]);
assertArrayEqual([1, 2, 3], [1, 'y', 4]);
assertArrayEqual([1, 1, 3], [1, 2, 4]);

