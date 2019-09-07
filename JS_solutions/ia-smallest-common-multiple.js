// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  // check if all numbers in range divide evenly into num2
  function allDivisible(value){
    return num2 % value === 0;
  } 

  let num1, num2, start1, start2;
  let range = [];
  
  // find largest num in arr
  if (arr[0] < arr[1]){
    [start1, start2] = arr;
  }
  else{
    [start2, start1] = arr;
  }
  // create range of  numbers array
  for(let i = start1; i <= start2; i++){
    range.push(i);
  }
  
  num2 = start2;
  
 do{
  num2 += start2;
 }
  while(!range.every(allDivisible));
  
  return num2;
}


smallestCommons([1, 5]);