// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it

function dropElements(arr, func) {
  // Drop them elements.
  for (let i = 0; i < arr.length; i++){
   if(func(arr[i])){
    return arr.slice(i);
    }
  }
  return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });

// Try to remember you can pass a function to findIndex() 