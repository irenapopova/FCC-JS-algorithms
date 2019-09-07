// CHALLENGE:
// Use destructuring to obtain the length of the input string str, and assign the length to len in line.

function getLength(str) {
  "use strict";

  // change code below this line
  const {length:len} = str; // change this <--- this becomes str.length
  // change code above this line

  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));