// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

import chalk from "chalk";

let favourite_transportation: string[] = [
  "Car",
  "Bicylce",
  "Motorcycle",
  "Bus",
  "Rickshaw",
];
for (let i = 0; i < 5; i++) {
  console.log(
    chalk.redBright(`I would like to own a ${favourite_transportation[i]}`)
  );
}
