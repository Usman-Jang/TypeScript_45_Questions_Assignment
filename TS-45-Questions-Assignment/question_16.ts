/* Qs.16 More Guests: You just found a bigger dinner table, so now more space is available.
  Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
  informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

// Original list of guests invite to dinner
const guestList2: string[] = ["Faraz Tareen", "Atique", "Uraib"];

// Print invitation messages to each guest
guestList2.forEach((value) =>
 console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Name of the guest who can't make it
const unableToAttend2: string = guestList2[1]; // Let's say Atique can't make it

// Print the name of the guest who can't make it
console.log(`${unableToAttend2} can't make it to the dinner.`);

// Replace the name of the guest who can't make it
guestList2[1] = "Ubaid"; // Inviting Ubaid instead

// Print a second set of invitation messages
guestList2.forEach((value) => 
 console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Informing people that I found a bigger dinner table
console.log("Good news! I found a bigger dinner table.");

// Adding one new guest to the beginning of the array
guestList2.unshift("Rajo");

// Adding one new guest to the middle of the array
guestList2.splice(3, 0, "Nushoor");

// Adding one new guest to the end of the array
guestList2.push("Anas");

// Print a new set of invitation messages
guestList2.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));
