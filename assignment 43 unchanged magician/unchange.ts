// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician_name: string[] = [
  "David Blaine",
  "Shin Lim",
  "Derren Brown",
  "Juan Tamariz",
  "Dynamo",
  "Penn and Teller",
];
function show_magicians(magician_name: string[]) {
  magician_name.forEach((magician) => {
    console.log(magician);
  });
}
//modifying array by adding "the great"
function make_great(magician_name: string[]) {

  let greatMagician:string[]= [];

  magician_name.forEach((magician) => {
    greatMagician.push(`${magician} the great`);
  });
  return greatMagician;
}
make_great(magician_name);
let greatMagician = make_great(magician_name.slice())
console.log(`------------------------------------------------`);
console.log("Original Array");
console.log(`------------------------------------------------`);
show_magicians(magician_name);

console.log(`------------------------------------------------`);
console.log("Modified Array");
console.log(`------------------------------------------------`);
show_magicians(greatMagician);
