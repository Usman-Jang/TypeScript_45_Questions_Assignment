/* Qs.41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

function showMagicians(magicians: string[]) {
  magicians.forEach((magician) => console.log(magician));
}

const magicians: string[] = ["David Copperfield","Harry Houdini","Penn Jillette","Teller"];

// Call the showMagicians function
showMagicians(magicians);
