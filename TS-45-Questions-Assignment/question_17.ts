/* Qs.17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an
empty list at the end of your program. */

// Original list of guests I'd like to invite to dinner
const guestList3: string[] = ["Rajo","Faraz Tareen","Ubaid","Nushoor","Uraib","Anas"];

// Print invitation messages to each guest
guestList3.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Informing people that you can only invite two people for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList3.length > 2) {
  const removedGuest: string | undefined = guestList3.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on the list
guestList3.forEach((value) => console.log(`Dear ${value},\nYou're still invited to dinner at my place.`));

// Remove the last two names from the list
guestList3.pop();
guestList3.pop();

// Print the list to ensure it's empty
console.log("Updated guest list:", guestList3);
