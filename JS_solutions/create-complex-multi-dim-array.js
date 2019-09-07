// CHALLENGE

// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'

let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [['loop', 'shift', 6, 7, 1000, 'method'], ['deep']],
  [[['concat', false, true, 'spread', 'array'], ['deeper']],
  [[['deepest', 1327.98, 'splice', 'slice', 'push']]]]
  // change code above this line
];

// NOTES
// let nestedArray = [ // top  

//                     ['deep'], //  2 level

//                         [
//                           ['deeper'], ['deeper'] // 3 levels
//                         ],

//                           [
//                             [
//                               ['deepest'], ['deepest'] // 4 levels
//                             ],
                                
//                               [
//                                 [
//                                   ['deepest-est?'] //5 levels
//                                 ]
//                               ]
//                           ]
//                   ];