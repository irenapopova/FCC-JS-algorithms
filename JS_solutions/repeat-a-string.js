function repeatStringNumTimes(str, num) {
  // repeat after me
  let strArr = [];
  for(let i = 0; i < num; i++){
    strArr.push(str);
  }
  return strArr.join('');
}

repeatStringNumTimes("abc", 3);

// NOT allowed to use string.repeat()