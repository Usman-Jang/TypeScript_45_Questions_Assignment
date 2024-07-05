"use strict";
/* Qs.22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */
// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];
// Access an element using an invalid index to produce an error
console.log(numbers[10]);
// Now let's correct the error by accessing a valid index
console.log(numbers[2]);
