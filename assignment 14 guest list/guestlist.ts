// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

import chalk from "chalk";
let guest_lists: string[] = ["Shijrat", "Malahim", "Anabia"];
for (let i = 0; i < 3; i++) {
  console.log(
    chalk.yellowBright(
      `Dear ${guest_lists[i]},\n I would like to invite you to the dinner`
    )
  );
}
