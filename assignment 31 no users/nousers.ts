// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user_names = [
  "Sadaf(Admin)",
  "Hania",
  "Aleeza",
  "Hoorain",
  "Fatima",
  "Sidra",
  "Sehrish",
  "Kehkashan",
  "Shijrat",
  "Mubashara",
];
user_names.splice(0);
// console.log(user_names);
if (user_names.length === 0) {
  console.log(`We need to find some users!`);
} else {
  console.log(`we dont need to find users`);
}

// let usernames: string[] = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
// Greet users
//}
// Removing all usernames ensures the message "We need to find some users!" is printed.