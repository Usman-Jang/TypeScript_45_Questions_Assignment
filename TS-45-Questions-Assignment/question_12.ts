/* Qs.12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. */

// Store the names of my friends in an array.
const friendsNames2: string[] = ["Faraz Tareen", "Atique", "Ubaid", "Uraib"];

// Iterate over each name in the array and print a personalized message
friendsNames2.forEach((value) => console.log(`Hello, ${value}! Have a great day!`));
    
