function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/[A-Z]|\s[a-z]/g, function(match){
    return `-${match.toLowerCase()}`;
  })

  .replace(/[\s\_]/g, '')
  .replace(/^\W/, '');
}

spinalCase('This Is Spinal Tap');

// INITIAL CODE BELOW - solved all but 1 test
//   return str .split('')
//    .map(i => {
//     if(str.indexOf(i) === 0 && i.match(/[A-Z]/)){
//       return i.replace(i, i.toLowerCase());
//     } 
//     if(i.match(/[A-Z]/)){
//       // console.log(i)
//       return i.replace(i, `-${i.toLowerCase()}`);
//     }
//     return i;
//   })
//    .join('') .replace(/\W+/g,'-');


// ALL TESTS PASS EXCEPT FOR spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"
