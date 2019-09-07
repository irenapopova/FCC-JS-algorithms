// Convert the given number into a roman numeral

function convertToRoman(num) {
  const romNums = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };
  const placeValues = { 0: 'I', 1: 'X', 2: 'C', 3: 'M' };
  
  function getRoman(num,index){
    let multipleFive = romNums[5 + ('0').repeat(index)];
    
    if(num == 9){
      return placeValues[index] + placeValues[index + 1];
    }
    else if(num > 5){
      return multipleFive + placeValues[index].repeat((num % 5));
    }
    else if(num == 5){
      return multipleFive;
    }
    else if(num == 4){
      return placeValues[index] + multipleFive;
    }
    else {
      return placeValues[index].repeat(num);
    }
  }

  let decimalNum = num.toString().split('').reverse();
  
  let romanNumeral = decimalNum.map((num, index) => getRoman(num, index));
  
  return romanNumeral.reverse().join('');
}

convertToRoman(36);