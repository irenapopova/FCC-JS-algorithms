// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum

function addTogether(a, b) {
  let args = [...arguments];
  [a, b] = args;
  
  if(arguments.length === 1 && Number.isInteger(a)){
    return function(b) {
      if(Number.isInteger(b)){
        return a + b;
      }
    }
  }

  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  }
  
  return undefined;
}

addTogether(2, 3);

// tougher than i expected

// ADVANCED SOLUTION - looks like chained ternary
// function addTogether() {
//   var args = Array.from(arguments);
//   return args.some(n => typeof n !== 'number') ? 
//     undefined: 
//     args.length > 1 ?
//       args.reduce((acc, n) => acc += n, 0):
//       (n) => typeof n === "number" ? 
//         n + args[0]:
//         undefined;
// }
