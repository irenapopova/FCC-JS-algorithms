// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  
  function compareNumbers(a, b) {
  return a - b;
  }
  return arr.sort(compareNumbers).indexOf(num);
}

getIndexToIns([40, 60], 50);