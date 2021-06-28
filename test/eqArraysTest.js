const eqArrays =    require('../eqArrays');
const assertEqual = require('../assertEqual');

 // TEST CODE
eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [1, 4, 3]);
eqArrays([4, 2, 3], [4, 2, 3])
eqArrays([1, 2, 3], [1, 2, 4]);
eqArrays([1, 1, 3], [1, 2, 4]);
//  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//  assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
//  assertEqual(eqArrays([4, 2, 3], [4, 2, 3]), true);
//  assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
//  assertEqual(eqArrays([1, 1, 3], [1, 2, 4]), false);