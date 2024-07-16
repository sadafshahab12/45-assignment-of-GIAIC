// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician_name = [
    "David Blaine",
    "Shin Lim",
    "Derren Brown",
    "Juan Tamariz",
    "Dynamo",
    "Penn and Teller",
];
function show_magicians(magician_name) {
    magician_name.forEach((magician) => {
        console.log(magician);
    });
}
//modifying array by adding great
function make_great(magician_name) {
    for (let i = 0; i < magician_name.length; i++) {
        magician_name[i] = magician_name[i] + " the Great";
    }
}
make_great(magician_name);
show_magicians(magician_name);
export {};
