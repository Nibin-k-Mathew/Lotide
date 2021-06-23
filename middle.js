
  // eqArrays  comapares two arrays and return true equal 

    const middle = function(arrays) {
    let mediaVal = [];
    console.log("length of the array ", arrays.length);
    //For arrays with one or two elements, there is no middle. Return an empty array else  return the middle element of the array.
    arrays.length <= 2 ? [] : 
    //Odd :For arrays with odd number of elements, an array containing a single middle element should be returned.
    //Even: For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    // Conditional will check array.length is odd or even and push the values to the mediaVal
    arrays.length % 2 !== 0 ? mediaVal.push(arrays[Math.ceil(arrays.length - 1) / 2]) 
    : mediaVal.push(arrays[Math.floor(arrays.length / 2) - 1 ],arrays[Math.ceil(arrays.length) / 2]);
    console.log("The median value is ",mediaVal);
    return mediaVal;

    };



  const eqArrays = function(array, array2) {
    if(array.length === 0 && array2.length === 0) return true;
    console.log(array, array2);
    if (array.length !== array2.length) return false;
    for (let element = 0; element < array.length; element += 1) {
      if (array[element] !== array2[element]) {  
        return false;   
      } 
      return true;
    }
  };

  // assetEqual function compare the actual and 
  const assertArrayEqual = function(array1, array2)  {
    let message = "";
    if (eqArrays(array1,array2)) {
      message = "✅✅✅ Assertion passed :Arrays are equal";
    }
    else {
      message ="🛑🛑🛑 Assertion failed :Arrays are not equal";
    }
    return message;
  };
let array = [3, 9]
    // TEST CODE
    console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
    console.log(assertArrayEqual(middle([1, 2, 3, 9, 7, 9]), array));
    console.log(assertArrayEqual(middle([4, 2]), []));
    console.log(assertArrayEqual(middle([4]), []));

    // console.log(middle([1, 2, 3, 4, 5]));
    // console.log(middle([1, 2, 3, 9, 7, 9]));
    // console.log(middle(([4, 2])));
    // console.log(middle([4]));