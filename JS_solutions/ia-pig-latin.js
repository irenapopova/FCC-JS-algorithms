function translatePigLatin(str) {
  if(str.match(/^[aeiou]/)){
    return str + 'way';
  }
  else{
    let vowel = str.indexOf(str.match(/[aeiou]/));
    console.log(vowel);
    return str.substring(vowel) + str.substring(0, vowel) + 'ay';
  }
}
translatePigLatin("california");