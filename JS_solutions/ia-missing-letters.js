// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let startIndex = alphabet.indexOf(str[0]);
  let endIndex = alphabet.length + 1;
  
  let letters = alphabet.slice(startIndex, endIndex);
  
  for(let i = 0; i < letters.length; i++){
    if(!str.includes(letters[i])){
      return letters[i];
    }
  }  
  
  return undefined;
}

fearNotLetter("stvwx");