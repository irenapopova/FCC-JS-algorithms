# Basic Data Structures: Add Items to an Array with push() and unshift()

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable. In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. Consider the following:

```javascript
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```
Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

### Instructions

We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

## Code

### Original

```javascript
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
```

### Solution

```javascript
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
```

## My Notes

Was curious if I could write a statement where both unshift() and push() were applied at once - of course `arr.unshift('stuff').push('more stuff');` didn't work. ~~Missing something here...~~ 

Chaining methods (new vocab!) doesn't work here because unshift() [returns the new length property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) of the object upon which the method was called (in this case 6)- not the array itself. The same goes for push() - it returns the new length property. 

[appendTo's article An Array of JavaScript Array Methods](https://appendto.com/2016/05/array-javascript-array-methods/), under the heading How Do Your Arrays Stack Up?, illustrates the array stack:

```javascript
var stack = ["a","b","c"];
console.log(stack)
> ["a", "b", "c"]
stack.push("d")
> 4
console.log(stack)
> ["a", "b", "c", "d"]
stack.pop()
"d"
console.log(stack)
> ["a", "b", "c"]
stack.unshift("d")
>4
console.log(stack)
> ["d", "a", "b", "c"]
stack.shift()
"d"
console.log(stack)
> ["a", "b", "c"]
```
We can't push() when the value we're working with is simply `6`. A number doesn't have a push() or shift() function - we need an array to return upon which to chain a method.

Someone on [stackoverflow](https://stackoverflow.com/questions/30081267/chaining-methods-error-in-javascript) suggested using the following:

```javascript
arr.push(arr.shift());
```
The idea being that reversing the operations allows us to apply a method upon a returned array. But this results in also adding the length of the array after using shift():

```javascript
arr.push(arr.unshift('I', 2, 'three'),7, 'VIII', 9);
//results in ["I", 2, "three", "IV", 5, "six", 6, 7, "VIII", 9]
```
According to [ProgrammerInterview.com - What is Method Chaining?](http://www.programmerinterview.com/index.php/javascript/javascript-method-chaining/):

> If you create a Javascript method that does not have a return value, then you might want to have that method return this. If this is returned from a method then you can perform method chaining on the methods that you define. Remember that method chaining will only work if the return value of the methods being chained is an actual object. 

How do you return 'this'? Good question...haven't figured out how to apply this suggestion to this situation.

But what's cool is that in my research came across a trick for merging arrays.

From [DWB - Merge Arrays with JavaScript](https://davidwalsh.name/merge-arrays-javascript):

> JavaScript has a simple, native function for merging arrays (concat) but it produces a new array. Since JavaScript vars are passed by reference, concat may mess up a reference. If you want to merge a second array into an existing first array, you can use this trick:

```
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
Array.prototype.push.apply(array1, array2);

console.log(array1); // is: [1, 2, 3, 4, 5, 6]
```
