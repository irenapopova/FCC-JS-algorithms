// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) { // LBH QVQ VG!
  function shift13(str, index){
    if(str.match(/[A-Z]/)){
    return (alphas.indexOf(str) > 12) ? 
          alphas[alphas.indexOf(str) - 26 + 13] :
          alphas[alphas.indexOf(str) + 13];
    }
    else{
      return str;
    }
  }
  const alphas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let rot13 = str.split('');
  
  return rot13.map(str => shift13(str)).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");