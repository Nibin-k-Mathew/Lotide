
//const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
  const results = [];
  for (let item of array) {

    results.push(callback(item));
  }
  //console.log("Map is ",results);
  return results;
}
const results1 = item => item[0];
//map(words, word => word[0]);
//console.log(results1);
const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed");
  }
  };
  const eqArrays = function(array1,array2) {
    console.log('array1',array1);
    console.log('array2',array2);
    if (array1.length !== array2.length) return false;
    for (let element = 0; element < array1.length; element += 1) {
      if (array1[element] !== array2[element]) {  
        return false;   
      }   
    }
    return true;
  };
  //assertEqual(eqArrays(map(["ground", "control", "to", "major", "tom"],results1),[ 'g', 'c', 't', 'm', 't' ]));
  // assertEqual(eqArrays(map(["ground", "control", "to", "major", "tom"],results1),[ 'g', 'c', 't', 'm', 't' ]));
  // console.log(map(["ground", "control", "to", "major", "tom"],results1));
  eqArrays(map(["ground", "control", "to", "major", "tom"],results1),['g', 'c', 't', 'm', 't']);
