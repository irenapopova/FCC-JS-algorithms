// Fill in the object constructor with the following methods below:
          // getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  let fullName = firstAndLast.split(' ');
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${fullName[0]} ${fullName[1]}`;
  };
  this.getFirstName = function() {
    return fullName[0];
  };
  this.getLastName = function() {
    return fullName[1];
  };
  this.setFullName = function(str) {
    fullName = str.split(' ');
  };
  this.setFirstName = function(str) {
    fullName[0] = str;
  };
  this.setLastName = function(str) {
    fullName[1] = str;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
