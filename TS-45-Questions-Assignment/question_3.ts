/* Qs3. Name Cases: Store a person’s name in a variable, and then print 
that person’s name in lowercase, uppercase, and titlecase. */

// Store the person's name in a variable
let myName: string = "Usman jang";

// Print the name in lowercase
console.log("Lowercase:", myName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", myName.toUpperCase());

// Print the name in titlecase
console.log("Titlecase:", myName.replace(/\b\w/g, c => c.toUpperCase())); 