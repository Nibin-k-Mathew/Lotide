
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let element = 0; element < array1.length; element += 1) {
    if (array1[element] !== array2[element]) {  
      return false;   
    }   
  }
  return true;
};


const assertArrayEqual = function(array1, array2)  {
  if (eqArrays(array1,array2)) {
    console.log("✅✅✅ Assertion passed :Arrays are equal");
  }
  else {
    console.log("🛑🛑🛑 Assertion failed :Arrays are not equal");
  }
};

// TEST CODE
  assertArrayEqual([1, 2, 3], [1, 2, 3]);
  assertArrayEqual([1, 2, 3], [1, 4, 3]);
  assertArrayEqual([4, 2, 3], [4, 2, 3]);
  assertArrayEqual([1, 2, 3], [1, 2, 4]);
  assertArrayEqual([1, 1, 3], [1, 2, 4]);