// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  let toBaseTen = function(arr){
    return arr.map((i, index) => i * (Math.pow(2,index)))
  }
  let reduceBaseTens = function(arr){
    return arr.reduce((acc, val) => acc + val)
  }
  let binaries = str.split(' ');
  let reverseBinaries = binaries.map(x => x.split('').reverse());
  let baseTenNums = reverseBinaries.map(x => toBaseTen(x));
  let baseTenReduced = baseTenNums.map(x => reduceBaseTens(x));
  let toString = baseTenReduced.map(x => String.fromCodePoint(x));
  return toString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// this was fun