function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
  };
  let cidTotal = [];
  let cidUnits = {};
  let changeDue = cash - price;

  let makeChange = {
    // total cash in drawer
    cidTotal() {
      for (let i of cid.reverse()) {
        if (i[1] !== 0) {
          cidTotal.push(i[1]);
          cidUnits[i[0]] = Math.round(i[1] / currencyValues[i[0]]);
        }
      }
      cidTotal = Math.round((cidTotal.reduce((i, total) => i + total) * 100)) / 100;
    },
    // get exact number of each currency unit needed for change
    getChangeCurrency(changeDue, cidTotal, cidUnits) {
      for (let i in cidUnits) {
        if (changeDue > cidTotal) {
          change.status = "INSUFFICIENT_FUNDS";
          break;
        };

        if (changeDue === cidTotal) {
          change.status = "CLOSED";
          change.change = cid.reverse();
          break;
        }
        
        if (Math.floor(changeDue / currencyValues[i]) > 0) {
          
          if (Math.floor(changeDue / currencyValues[i]) > cidUnits[i]) {
            change.change.push([i, currencyValues[i] * cidUnits[i]]);
            changeDue = parseFloat(changeDue - currencyValues[i] * cidUnits[i]).toPrecision(4);
            
          }
          else {
            change.change.push([i, currencyValues[i] * Math.floor(changeDue / currencyValues[i])]);
            changeDue = parseFloat(changeDue - currencyValues[i] * Math.floor(changeDue / currencyValues[i])).toPrecision(4);
          }
          change.status = "OPEN";
        }
        cidTotal = cidTotal - currencyValues[i] * cidUnits[i];
      }

    }
  };

  // return object
  let change = {
    status: '',
    change: []
  };

  makeChange.cidTotal();
  makeChange.getChangeCurrency(changeDue, cidTotal, cidUnits);

  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);