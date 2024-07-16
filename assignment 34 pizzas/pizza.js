// 34.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza = ["Margherita Pizza", "Sicilian Pizza", "Hawaiian Pizza"];
//using for lopp for print pizza one by one
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
//use forEach loop to print a sentence
pizza.forEach(pizzas => {
    console.log(`I like ${pizzas}`);
});
// adding line in the end of program
console.log(`I absolutely love pizza! Its perfect blend of melted cheese, savory toppings, and crispy crust always satisfies my taste buds like nothing else.`);
export {};
