// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

import chalk from "chalk";
let guest_lists:string [] = ["Shijrat" , "Malahim" , "Anaiba"];
for (let i = 0; i < 3; i++) {
    console.log(
      chalk.yellowBright(
        `Dear ${guest_lists[i]},\n I would like to invite you to the dinner`
      )
    );
  }
console.log(chalk.redBright(`Unfotunately, ${guest_lists[1]} unable to come at the dinner on time.`));
// shift method 
// guest_lists.shift();
// guest_lists.unshift("Hina");
// splice method 
guest_lists.splice(1,1,("Hina"));

console.log(`New Set of Invitation`);
for(let i = 0; i<3; i++){
    console.log(chalk.greenBright(`Dear ${guest_lists[i]},\n You are invited for the dinner`));
}
