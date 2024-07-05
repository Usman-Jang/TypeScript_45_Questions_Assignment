/* Qs.31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

// Array of usernames
let userNames1: string[] = ["Usman", "Uraib", "admin", "Nushoor", "Rajo"];

// Check if the list of users is not empty
if (userNames1.length > 0) {
  userNames1.forEach((user) => {
    if (user === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  });
} else {
  console.log("We need to find some users!");
}

// Remove all userNames1 from the array
userNames1 = [];

// Check if the list of users is not empty after removal
if (userNames1.length > 0) {
  userNames1.forEach((user) => {
    if (user === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  });
} else {
  console.log("We need to find some users!");
}
