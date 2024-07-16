// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
import chalk from "chalk";
let names = ["Alina", "Mavia", "Mubashara"];
const message = "Good Morning! Have a good day with coffee";
console.log(chalk.redBright(`Hey ${names[0]}, \n ${message}`));
console.log(chalk.yellowBright(`Hey ${names[1]}, \n ${message}`));
console.log(chalk.greenBright(`Hey ${names[2]}, \n ${message}`));
