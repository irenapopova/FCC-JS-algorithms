function findLongestWordLength(str) {
  return str.split(' ')
      .map(word => word.length)
      .reduce((accumulator, currentValue) => 
      Math.max(accumulator, currentValue));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");