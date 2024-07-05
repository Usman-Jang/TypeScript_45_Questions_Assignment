/* Qs.18 Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has
changed. */

// Define an array of places to visit
const places = ["Japan", "United Kingdom", "United States", "Turkey", "France"];

// Print original order
console.log("Original Order:", places);

// Print alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...places].sort());

// Show that the original order is still intact
console.log("Original Order After Sorting Alphabetically:", places);

// Print reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...places].sort().reverse());

// Show that the original order is still intact
console.log("Original Order After Sorting Reverse Alphabetically:", places);

// Reverse the order of the list
places.reverse();
console.log("Reversed Order:", places);

// Reverse the order again to get back to the original order
places.reverse();
console.log("Back to Original Order:", places);

// Sort the array alphabetically
places.sort();
console.log("Sorted Alphabetically:", places);

// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Sorted Reverse Alphabetically:", places);
