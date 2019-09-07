function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let orbitalArr = [];
  
  
  for(let i of arr){
    let orbitalPeriod = Math.round( 2 * Math.PI * Math.sqrt( Math.pow( earthRadius + i.avgAlt, 3 ) / GM ) ); 

    orbitalArr.push({ name: i.name, orbitalPeriod: orbitalPeriod });
  }

  return orbitalArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);