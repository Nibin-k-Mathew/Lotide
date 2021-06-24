const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj,strVal){
  for(const element in obj){
    if(obj[element] === strVal){
      return element;
    }
  }
  return "undefined";
}
const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed");
  }
  };

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));