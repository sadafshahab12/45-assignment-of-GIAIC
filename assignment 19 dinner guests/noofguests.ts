// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
import chalk from "chalk";
let guest_lists: string[] = ["Shijrat" , "Malahim", "Anabia"];
console.log((chalk.ansi256(200)(`Total number of guests invited for the dinner are ${guest_lists.length}`)));