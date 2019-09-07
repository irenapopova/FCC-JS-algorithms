// CHALLENGE

// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no"

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\s/; // Change this line
let result = ohRegex.test(ohStr);