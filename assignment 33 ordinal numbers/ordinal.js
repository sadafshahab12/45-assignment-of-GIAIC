// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// my own method 
for (let i = 0; i < ordinal_numbers.length; i++) {
    if (ordinal_numbers[i] === 1) {
        console.log(ordinal_numbers[i].toString().concat("st"));
    }
    else if (ordinal_numbers[i] === 2) {
        console.log(ordinal_numbers[i].toString().concat("nd"));
    }
    else if (ordinal_numbers[i] === 3) {
        console.log(ordinal_numbers[i].toString().concat("rd"));
    }
    else {
        console.log(ordinal_numbers[i].toString().concat("th"));
    }
}
export {};
// other method  just for saving 
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(number => {
//     let suffix = "th";
//     if (number === 1) {
//         suffix = "st";
//     } else if (number === 2) {
//         suffix = "nd";
//     } else if (number === 3) {
//         suffix = "rd";
//     }
//     console.log(`${number}${suffix}`);
// });
