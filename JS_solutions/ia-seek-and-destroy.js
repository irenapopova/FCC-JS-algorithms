// Provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  let args = [...arguments];
  args.shift();
  return arr.filter(i => !args.includes(i));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);