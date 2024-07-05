"use strict";
/* Qs.37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
// Define the make_shirt function with default values
function makeShirt2(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}
makeShirt2();
makeShirt2("Medium");
makeShirt2("Small", "JavaScript is awesome!");
