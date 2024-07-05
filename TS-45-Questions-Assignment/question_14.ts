/* Qs.14 Guest List: If you could invite anyone, living or deceased,to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */

// Storing guest I'd like to invite to dinner
const guestList: string[] = ["Faraz Tareen", "Atique", "Uraib"];

// Print invitation messages to each guest
guestList.forEach((value) => console.log(`Dear ${value},\nYou are cordially invited to dinner at my place.`));
