const head = (arr) => {
return arr[0];
}

const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed : ${actual} === ${expected} ");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed : ${actual} !== ${expected} ");
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");