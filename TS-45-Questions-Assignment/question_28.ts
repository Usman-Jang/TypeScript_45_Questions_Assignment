/* Qs.28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder. */

// Set a value for the variable age
let age2: number = 22;

// If-else chain to determine the person's stage of life based on age2
if (age2 < 2) {
  console.log("The person is a baby.");
} else if (age2 >= 2 && age2 < 4) {
  console.log("The person is a toddler.");
} else if (age2 >= 4 && age2 < 13) {
  console.log("The person is a kid.");
} else if (age2 >= 13 && age2 < 20) {
  console.log("The person is a teenager.");
} else if (age2 >= 20 && age2 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}