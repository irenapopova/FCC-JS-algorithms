function factorialize(num) {
  if (num === 0){
    return 1;
  }
  let nums = [];
  while (num > 0){
    nums.push(num);
    num--;
  }
  return nums.reduce((accumulator, currentValue) => accumulator * currentValue);
}

factorialize(5);

