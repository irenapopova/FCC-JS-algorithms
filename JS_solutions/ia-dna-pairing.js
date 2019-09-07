// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str) {
  let strArr = str.split('');
  const pairs = {'G':'C', 'C':'G', 'A':'T', 'T':'A'};
  return strArr.map(i => [i,pairs[i]]);
}

pairElement("GCG");