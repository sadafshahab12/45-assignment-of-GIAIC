// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["john", "robin", "daisy", "helly", "reena", "anisha"];
let new_users: string[] = ["JOHN", "rabia", "faria", "Helly", "reena", "nisha"];

new_users.forEach(newUsers => {
    if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log("Enter a new username")
    }
    else {
        console.log("username is available")
    }
})


// for(let i = 0; i<new_users.length; i++){
//     if(new_users[i] === current_users[i]){
//         console.log("Enter a new username");
//     }
//     else{
//         console.log("username is available");
//     }
// }


// second practice 
// new_users.forEach(newUser => {
//     if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });

 //3rd practice 
// new_users.forEach(newUSer=>{
//     if(current_users.some(currentUSer => currentUSer.toLowerCase() ===newUSer.toLowerCase())){
//         console.log("Hey, Enter a new username");
        
//     }
//     else{
//         console.log("not available ")
//     }
// })