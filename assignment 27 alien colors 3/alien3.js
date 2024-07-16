// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
import chalk from "chalk";
// 1st version for green 
let alien_color3 = "green";
if (alien_color3 === "green") {
    console.log(chalk.greenBright(`You earned 5 points.`));
}
else if (alien_color3 === "yellow") {
    console.log(`You earned 10 points.`);
}
else {
    console.log(`You earned 15 points.`);
}
// 2nd version for yellow
alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log(`You earned 5 points.`);
}
else if (alien_color3 === "yellow") {
    console.log(chalk.yellowBright(`You earned 10 points.`));
}
else {
    console.log(`You earned 15 points.`);
}
// 3rd version for red
alien_color3 = "red";
if (alien_color3 === "green") {
    console.log(`You earned 5 points.`);
}
else if (alien_color3 === "yellow") {
    console.log(`You earned 10 points.`);
}
else {
    console.log(chalk.redBright(`You earned 15 points.`));
}
