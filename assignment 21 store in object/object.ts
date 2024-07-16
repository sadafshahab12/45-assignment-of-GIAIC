// 21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type user_data = {
    name : string,
    fathername : string,
    age : number,
    rollnumber : number,
    qualification : string,
}

let user : user_data = {
    name : "Sadaf",
    fathername : "Muhammad Shahab",
    age : 23,
    rollnumber : 289657,
    qualification : "Bachelor in Commerce",

}
console.log(`My Name is ${user.name}`);
console.log(`My Father Name is ${user.fathername}`);
console.log(`My Age is ${user.age}`);
console.log(`My Roll Number is ${user.rollnumber}`);
console.log(`My Qualification is ${user.qualification}`);
