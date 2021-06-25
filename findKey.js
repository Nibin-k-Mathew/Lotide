const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKey = function(obj,callback){
  for(const element in obj){
    if(callback(obj[element])){
      return element;
    }
  }
  return undefined;
}
const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed");
  }
  };
                                                     // callback function as Anonymous            
assertEqual(findKey(bestTVShowsByGenre,(element) => element === "That '70s Show"), undefined);
assertEqual(findKey(bestTVShowsByGenre,(element) => element === "The Wire"), "drama");

// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));