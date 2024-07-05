/* Qs.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new  set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/

// Original list of guests invite to dinner
const guestList1: string[] = ["Faraz Tareen", "Atique", "Uraib"];

// Print invitation messages to each guest
guestList1.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));

// Name of the guest who can't make it
const unableToAttend: string = guestList1[1]; 

// Print the name of the guest who can't make it
console.log(`${unableToAttend} can't make it to the dinner.`);

// Replace the name of the guest who can't make it
guestList1[1] = "Ubaid";

// Print a second set of invitation messages
guestList1.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));