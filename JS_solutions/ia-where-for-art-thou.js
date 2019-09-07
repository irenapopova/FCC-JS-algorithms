// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  let sourceKeys = Object.keys(source);
  
  collection.forEach(function(obj){ 
    let objKeys = Object.keys(obj);

    if(sourceKeys.every((key) => objKeys.includes(key) && source[key] === obj[key])){
      arr.push(obj);
    }
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// I'm not gonna lie, this was tough. Took a few hours