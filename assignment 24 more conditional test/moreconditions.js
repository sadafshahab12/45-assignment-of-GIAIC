// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let str1 = "Sadaf";
let str2 = "Shahab";
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5, 6];
// • Tests for equality and inequality with strings
console.log(`Equality with strings`);
console.log(str1 == "Sadaf");
console.log(`Inequality with strings`);
console.log(str1 == str2);
// • Tests using the lower case function
console.log(`Lower case function`);
console.log(str1.toLowerCase() !== "Sadaf");
console.log(str1.toLowerCase() == str2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// equality and inequality
console.log(`Equality with number:`);
console.log(num1 == 5);
console.log(`Inequality with number:`);
console.log(num1 == num2);
// greater than and less than
console.log(`Greater than and less than`);
console.log(`Greater than:`);
console.log(num1 > 3);
console.log(num2 > 12);
console.log(`Less than:`);
console.log(num1 < 6);
console.log(num2 < 9);
// greater than or equal to, and less than or equal to
console.log(`Greater than or equal to & less than or equal to`);
console.log(`Greater than or equal to:`);
console.log(num1 >= 5);
console.log(num2 >= 15);
console.log(`Less than or equal to:`);
console.log(num1 <= 6);
console.log(num2 <= 5);
// • Tests using "and" and "or" operators
console.log(`Using && operator`);
console.log(num1 > 3 && num2 < 11);
console.log(num1 > 6 && num2 < 8);
console.log(`Using || operator`);
console.log(num1 > 3 || num2 < 11);
console.log(num1 < 3 || num2 > 15);
// • Test whether an item is in a array
console.log(`Item is in a array:`);
console.log(Arr.includes(5));
console.log(Arr.includes(9));
// • Test whether an item is not in a array
console.log(`Item is not in a array:`);
console.log(!Arr.includes(7));
console.log(!Arr.includes(3));
export {};
