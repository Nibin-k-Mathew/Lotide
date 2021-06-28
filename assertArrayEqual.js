const eqArrays         = require('./eqArrays');
const assertArrayEqual = function(array1, array2)  {
  if (eqArrays(array1,array2)) {
    console.log("✅✅✅ Assertion passed :Arrays are equal");
  }
  else {
    console.log("🛑🛑🛑 Assertion failed :Arrays are not equal");
  }
};
module.exports = assertArrayEqual;