// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
import chalk from "chalk";
let Arr = ["Sadaf", 23, "student"];
console.log(chalk.redBright(`Intentional Error`));
console.log(`${Arr[3]}\n`);
console.log(chalk.greenBright(`Correction of Intentional Error`));
console.log(Arr[2]);
