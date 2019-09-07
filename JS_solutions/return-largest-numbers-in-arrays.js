function largestOfFour(arr) {
  // You can do this!
  let arrLargest = [];
  
  for (let index of arr){
    arrLargest.push(index.reduce((accumulator, currentValue) =>
    Math.max(accumulator, currentValue)));
    }
  return arrLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// .reduce((accumulator, currentValue) => 
//       Math.max(accumulator, currentValue))