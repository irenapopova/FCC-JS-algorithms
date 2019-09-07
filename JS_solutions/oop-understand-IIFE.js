// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

// function makeNest() {
//   console.log("A cozy nest is ready");
// }

// makeNest(); 

(function () {
  console.log("A cozy nest is ready");
})(); 


// Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.