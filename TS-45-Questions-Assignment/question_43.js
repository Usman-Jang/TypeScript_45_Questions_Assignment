"use strict";
/* Qs.43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great ()with a copy of the array of magicians’ names. Because the original array will be unchanged, return the
new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */
function showMagicians3(magicians2) {
    magicians2.forEach((magician) => console.log(magician));
}
function makeGreat2(magicians3) {
    const greatMagicians2 = [];
    magicians3.forEach((magician) => {
        greatMagicians2.push(`the Great ${magician}`);
    });
    return greatMagicians2;
}
// Define an array of magician's names
const magicians3 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
const greatMagicians2 = makeGreat2([...magicians3]);
console.log("Original Magicians:");
showMagicians3(magicians3);
console.log("Great Magicians:");
showMagicians3(greatMagicians2);
