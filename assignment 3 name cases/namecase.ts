// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_name: string = "SaDaf sHaHab";

// LowerCase
console.log(`${person_name.toLowerCase()}`);

// UpperCase
console.log(`${person_name.toUpperCase()}`);

// TitleCase

let step1 = person_name.split(" ");
let step2 = step1.map(
  (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
);

let step3 = step2.join(" ");
console.log(`${step3}`);
// console.log(
//   person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()
// );