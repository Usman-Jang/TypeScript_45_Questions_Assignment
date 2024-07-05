/* Qs.42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()to see that the list has actually been modified. */

function showMagicians2(magicians2: string[]) {
  magicians2.forEach((magician) => console.log(magician));
}

function makeGreat(magicians2: string[]) {
  const greatMagicians: string[] = [];
  magicians2.forEach((magician) => {
    greatMagicians.push(`The Great ${magician}`);
  });
  return greatMagicians;
}

// Define an array of magician's names
const magicians2: string[] = ["David Copperfield","Harry Houdini","Penn Jillette","Teller"];

// Call the makeGreat function
const greatMagicians: string[] = makeGreat(magicians2);

// Call the showMagicians2 function to see the modified list
showMagicians2(greatMagicians);
