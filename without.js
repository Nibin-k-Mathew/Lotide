const without = function(array1, array2) {
  //if (array1.length !== array2.length) return false;
  let filArr =[];
  for (let index = 0; index < array1.length; index += 1) {
    let found = false;
    for(let index2 = 0; index2 < array2.length; index2 += 1){
    if (array1[index] === array2[index2]) {  
      found =true;  
    } 
  }
    //return array1;
  if(!found){
    filArr.push(array1[index]);
  }
  }
  return filArr;
};
  const assertArrayEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed : ${actual} === ${expected} ");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed : ${actual} !== ${expected} ");
  }
  };
  assertArrayEqual(without([1, 2, 3], [ 2, 3]));
  assertArrayEqual(without([1, 2, 3], [3]));
  assertArrayEqual(without(["1","9", "7"], [1,2,"3"]));
  assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]));