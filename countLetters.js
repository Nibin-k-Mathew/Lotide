const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion passed : ${actual} === ${expected} ");
  }
  else {
    console.log(" 🛑🛑🛑 Assertion failed : ${actual} !== ${expected} ");
  }
  };
  /*
  The function should take in a sentence (as a string) and then return a count of 
  each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report 
back these counts. 
It's not that we want to know how many H's are in this sentence?, because that 
would just be a number. 
We need it report back multiple numbers.
*/

const countletters = function(letters){
  let arr = letters.split("");
  console.log(arr);
  let text = "";
  let y = {};
  for( x of arr) {
    if(x !== " ") {
      y[x]= (y[x] || 0) + 1;
      console.log("key of object :",x,y[x]);
      
    }
  }
  //console.dir(y);
  return y;
};
console.log(countletters("LIGHTHOUSE LABS"));
// console.log(countletters("Sajini Sara Sajan"));
// console.log(countletters("Jonathan Mathew Nibin"));