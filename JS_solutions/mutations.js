// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  let comparedLetters = arr[1].toLowerCase().split('')
  .map(i => arr[0].toLowerCase().includes(i));
  
  return !comparedLetters.includes(false);
  
}

mutation(["Mary", "Army"]);