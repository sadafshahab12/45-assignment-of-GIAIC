// 23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// 5 tests evaluate to True
console.log(`5 tests evaluate to True`);
console.log(`Test 1`);
let car = "Honda";
console.log(`Is car == Honda? I predict True.`);
console.log(car == "Honda");
console.log(`Test 2`);
console.log(`Is car length is 5? I predict True.`);
console.log(car.length == 5);
console.log(`Test 3`);
console.log(`Is car !== Toyota? I predict True.`);
console.log(car !== "Toyota");
console.log(`Test 4`);
console.log(`Is car length > 4? I predict True.`);
console.log(car.length > 4);
console.log(`Test 5`);
console.log(`Is car name start with H? I predict True.`);
console.log(car.startsWith("H"));
// 5 tests evaluate to False
console.log(`5 tests evaluate to False`);
console.log(`Test 1`);
console.log(`Is car !== Honda? I predict False.`);
console.log(car !== "Honda");
console.log(`Test 2`);
console.log(`Is car length is 7? I predict False.`);
console.log(car.length == 7);
console.log(`Test 3`);
console.log(`Is car length !== 5? I predict False.`);
console.log(car.length !== 5);
console.log(`Test 4`);
console.log(`Is car name start with S? I predict False.`);
console.log(car.startsWith("s"));
console.log(`Test 5`);
console.log(`Is car is in upper case? I predict False.`);
console.log(car.toUpperCase() == car);
export {};
