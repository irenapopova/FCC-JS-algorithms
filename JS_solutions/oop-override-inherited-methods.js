// Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function() {return "Alas, this is a flightless bird."};


// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// function Animal() { }
// Animal.prototype.eat = function() {
//   return "nom nom nom";
// };
// function Bird() { }

// // Inherit all methods from Animal
// Bird.prototype = Object.create(Animal.prototype);

// // Bird.eat() overrides Animal.eat()
// Bird.prototype.eat = function() {
//   return "peck peck peck";
// };
// If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

// 1. duck => Is eat() defined here? No.

// 2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.

// 3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.

// 4. Object => JavaScript stopped searching before reaching this level.