// Sum all the prime numbers up to and including the provided number.

// create array of numbers in range of num
function getNumArray(num) {
  
  let numArr = Array.from({length: num + 1}, (v=2, i) => i);
  numArr.splice(0, 2);
  return numArr;
}

// filter numArr down to only prime numbers of num
function sieve(numArr){
  
  numArr.map((value, index) => {
    let indexValue = value + index;
    let counter = value;

    while(indexValue < numArr.length){
      numArr[indexValue] = undefined;
      indexValue += value;
      counter += value;
    }
  });
  return numArr.filter( i => i !== undefined);
}

// total sum of all primes
function primeSum(primes){
  return primes.reduce((a, b) => a + b);
}

function sumPrimes(num){
  return primeSum(sieve(getNumArray(num)));
}

sumPrimes(10);


// was trying take more of a functional programming approach but is this heading towards callback hell ???