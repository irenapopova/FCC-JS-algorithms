// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let dimensionalArr = [];
  
  while(arr.length > 0){
    let nestedArr = arr.splice(0, size);
    dimensionalArr.push(nestedArr);
  }

  return dimensionalArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Below was my first attempt utilizing .slice() needed to have a variable for array.length then after switching to using .splice() I realized it didn't need the length variable:

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let arrLength = arr.length;
//   let dimensionalArr = [];
  
//   while(arrLength > 0){
//     let nestedArr = arr.splice(0, size);
//     dimensionalArr.push(nestedArr);
//     arrLength -= size;
//   }

//   return dimensionalArr;
// }
// chunkArrayInGroups(["a", "b", "c", "d"], 2);