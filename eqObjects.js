const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚💚💚Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};
  const eqObjects = function(object1, object2) {
     //make a variable for object 1 and object to store the keys in the object (eg. a: b:)
    const Obj1 = Object.keys(object1);
    const Obj2 = Object.keys(object2)
    if (Obj1.length !== Obj2.length) {
      return false;
    }
    for (let key of Object.keys(object1)) {
      if ((Array.isArray(object1[key]) === true) && (Array.isArray(object2[key]) === true)) {
        return eqArrays(object1[key], object2[key]);
      } 
       if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };

  const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false