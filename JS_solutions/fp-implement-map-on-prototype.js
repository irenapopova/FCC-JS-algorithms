// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

    this.forEach(function(entry) {
    newArray.push(callback(entry));
  }, this);

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});


// *STUDY THIS FURTHER*