const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (array1[element] !== array2[element]) {  
      return false;   
    } 
    return true;
  }
};
  const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed : ${actual} === ${expected} ");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed : ${actual} !== ${expected} ");
  }
  };

  // TEST CODE
  assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  AssertArrayEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
  AssertArrayEqual(eqArrays([4, 2, 3], [4, 2, 3]), true);
  AssertArrayEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  AssertArrayEqual(eqArrays([1, 1, 3], [1, 2, 4]), false);