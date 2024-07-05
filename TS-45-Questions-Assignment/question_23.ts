/* Qs.23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test
  and your prediction for the results of each test. Your code should look something like this:
  let car = 'subaru';
  console.log("Is car == 'subaru'? I predict True.")
  console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let temperature = 25;

// Test 1
console.log("Test 1: Is temperature greater than or equal to 20? Prediction:", temperature >= 20);
// Test 2
console.log("Test 2: Is temperature less than or equal to 20? Prediction:", temperature <= 20);


let isRaining = true;

// Test 3
console.log("Test 3: Is it raining? Prediction:", isRaining);
// Test 4
console.log("Test 4: Is it not raining? Prediction:", !isRaining);


let dayOfWeek = "Monday";

// Test 5
console.log("Test 5: Is it Monday? Prediction:", dayOfWeek === "Monday");
// Test 6
console.log("Test 6: Is it Friday? Prediction:", dayOfWeek === "Friday");


let age = 30;

// Test 7
console.log("Test 7: Is age === 40? Prediction:", age === 30);
// Test 8
console.log("Test 8: Is age equal to 30? Prediction:", age === 40);


let isSunny = false;

// Test 9
console.log("Test 9: Is it not sunny? Prediction:", !isSunny);
// Test 10
console.log("Test 10: Is it sunny? Prediction:", isSunny);