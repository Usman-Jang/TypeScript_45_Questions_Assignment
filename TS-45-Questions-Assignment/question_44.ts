
/* Qs.44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */

// Define the function to summarize sandwich order
function makeSandwich(...items: string[]) {

    console.log("Making sandwich with the following items:");

    items.forEach((item) => console.log(`- ${item}`))
    
    console.log("Sandwich ready!\n");
}

// Call the function with different numbers of arguments
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Turkey", "Bacon", "Avocado", "Swiss Cheese");
makeSandwich("Ham", "Mustard");
