// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

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
show_magicians(magician_name);
