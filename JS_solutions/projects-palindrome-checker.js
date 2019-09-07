// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  // Good luck!
  const regex = /[\W\_]/g;

  let alphaNumStr = str.replace(regex, '').toLowerCase();

  return alphaNumStr === alphaNumStr.split('').reverse().join('');
}

palindrome("eye");