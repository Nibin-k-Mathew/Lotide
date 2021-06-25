const takeUntil = (numbers,maxValue,callback) => {
  let arr = [];
  for (number of numbers) {
    if (callback(number,maxValue)) { 
      return arr;
    }
    arr.push(number);
  }
  return arr;
};

//call back function
// const isGreaterThanZero = (num,maxValue) => {
//   return num === maxValue
// }

                                                    // callback function as Anonymous 
console.log(takeUntil([2, 5, 4, -6, 7, 8, -2], -2, (num,maxValue) => num === maxValue));
console.log(takeUntil([2, 3, 4, -6, 6, 8, -2], -2, (num,maxValue) => num < maxValue > 0));