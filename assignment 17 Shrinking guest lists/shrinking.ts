// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
import chalk from "chalk";

let guest_lists: string[] = ["Shijrat", "Hina", "Anabia"];

console.log(
  chalk.yellowBright(`Hurrah! We found a bigger dinner table for my guests`)
);

guest_lists.unshift("Mahnoor");
guest_lists.splice(3, 0, "Hadia");
guest_lists.push("Palwasha");

console.log(chalk.redBright(`New Set of Invitation`));
for (let i = 0; i < 6; i++) {
  console.log(`Dear ${guest_lists[i]},\n You are invited to the dinner`);
}

console.log(
  chalk.yellowBright(
    `Unfortunately, Due to shortage of space we can invite only two people for dinner`
  )
);
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while (guest_lists.length > 2) {
  let not_invited = guest_lists.pop();
  console.log(
    chalk.bgRedBright(
      `Sorry ${not_invited}, We cannot invite you to the dinner.\n`
    )
  );
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(chalk.yellowBright(`New Invitation`));

for (let i = 0; i < guest_lists.length; i++) {
  console.log(`Dear ${guest_lists[i]},\nYou are still invited to the dinner\n`);
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log(chalk.bgYellowBright(`Empty guest list\n`));
guest_lists.pop();
guest_lists.pop();
console.log(guest_lists);
