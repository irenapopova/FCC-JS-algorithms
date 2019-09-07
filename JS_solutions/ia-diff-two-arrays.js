// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays

function diffArray(arr1, arr2) {
  let difference1 = arr1.filter(i => !arr2.includes(i));
  let difference2 = (arr2.filter(i => !arr1.includes(i)));
  
  return difference1.concat(difference2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);