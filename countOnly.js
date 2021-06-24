
const assertEqual = function(actual, expected)  {
  const inspect = require('util').inspect; // <= add this line
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion passed : ${inspect(actual)} === ${inspect(expected)} `);
  }
  else {
    console.log(`🛑🛑🛑 Assertion failed : ${inspect(actual)} === ${inspect(expected)} `);
  }
  };

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems){
    if(itemsToCount[item]){
      results[item] ? results[item] += 1 : results[item] = 1
    }
  }
  console.log(" count of true object values", results);
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Agouhanna"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true });

//Test code
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], 2);

