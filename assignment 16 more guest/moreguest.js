// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
import chalk from "chalk";
let guest_lists = ["Shijrat", "Hina", "Anabia"];
console.log(chalk.yellowBright(`Hurrah! We found a bigger dinner table for my guests`));
guest_lists.unshift("Mahnoor");
guest_lists.splice(3, 0, "Hadia");
guest_lists.push("Palwasha");
console.log(chalk.redBright(`New Set of Invitation`));
for (let i = 0; i < 6; i++) {
    console.log(`Dear ${guest_lists[i]},\n You are invited to the dinner`);
}
