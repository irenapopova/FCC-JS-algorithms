// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  while (arr.some(i => Array.isArray(i))) {
    for (let i in arr) {
      if (Array.isArray(arr[i])) {
        arr = arr.flat();
      }
    }
  }

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);


// MDN's solution when arr.flat() is not supported
// return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
