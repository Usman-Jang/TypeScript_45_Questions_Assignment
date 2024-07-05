/* Qs.24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

let fName = "Usman Jang";
let age1 = 22;
const fruits = ["apple", "banana", "orange"];
let favoriteFruit = "banana";

// Tests for equality and inequality with strings
console.log("Test 1: Is fName equal to 'Usman Jang'? Prediction:", fName === "Usman Jang");

console.log("Test 2: Is fName equal to 'Uraib'? Prediction:", fName === "Uraib");

// Tests using the lower case function
console.log("Test 3: Is fName lowercase 'Usman Jang'? Prediction:", fName.toLowerCase() === "Usman Jang");

// Numerical tests
console.log("Test 4: Is age1 equal to 22? Prediction:", age1 === 22);

console.log("Test 5: Is age1 equal to 30? Prediction:", age1 === 30 );

console.log("Test 6: Is age1 greater than 20? Prediction:", age1 > 20);

console.log("Test 7: Is age1 less than 30? Prediction:", age1 < 30);

console.log("Test 8: Is age1 greater than or equal to 22? Prediction:", age1 >= 22);

console.log("Test 9: Is age1 less than or equal to 22? Prediction:", age1 <= 22);

// Tests using "and" and "or" operators
console.log("Test 10: Is age1 greater than 20 and less than 30? Prediction:", age1 > 20 && age1 < 30 );

console.log("Test 11: Is age1 greater than 30 or less than 20? Prediction:", age1 > 30 || age1 < 20);

// Test whether an item is in an array
console.log("Test 12: Is 'banana' in the fruits array? Prediction:", fruits.includes("banana"));

// Test whether an item is not in an array
console.log("Test 13: Is 'grape' not in the fruits array? Prediction:", !fruits.includes("grape"));