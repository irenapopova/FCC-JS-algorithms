// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num){
  let fibNums = [0, 1];
  let a = 0;
  let b = 1;

  Array.from({ length: num }, () => {
    fibNums.push(fibNums[a] + fibNums[b]);
    a++;
    b++;
  });
  
  let oddFibs = fibNums.filter(i => i % 2 === 1 && i <= num);
  return oddFibs.reduce((a, b) => a + b);
}

sumFibs(4);