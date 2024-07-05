/* Qs.19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
   indicating the number of people you are inviting to dinner. */

// Original list of guests I'd like to invite to dinner
const guestList4: string[] = ["Faraz Tareen", "Atique", "Uraib"];

// Print invitation messages to each guest
guestList4.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Name of the guest who can't make it
let unableToAttend1: string = guestList4[1]; 

// Print the name of the guest who can't make it
console.log(`${unableToAttend1} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with the name of the new person you are inviting
guestList4[1] = "Ubaid"; 

// Print a second set of invitation messages
guestList4.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Informing people that I found a bigger dinner table
console.log("Good news! I found a bigger dinner table.");

// Adding one new guest to the beginning of the array
guestList4.unshift("Rajo");

// Adding one new guest to the middle of the array
guestList4.splice(3, 0, "Nushoor");

// Adding one new guest to the end of the array
guestList4.push("Anas");

// Print a new set of invitation messages
guestList4.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Print a message indicating the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList4.length}`);