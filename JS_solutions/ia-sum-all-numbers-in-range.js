// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let lastNum = sortedArr[arr.length - 1];
  let counter = sortedArr[0];
  let rangeNums = [];
  
  while(counter <= lastNum){
    rangeNums.push(counter);
    counter++;
  }
  
  return rangeNums.reduce((acc, currVal) => acc + currVal);
}

sumAll([1, 4]);