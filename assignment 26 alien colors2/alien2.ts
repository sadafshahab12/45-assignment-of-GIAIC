// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_color = "green";

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// 1st version 
if(alien_color=== "green"){
    console.log(`You earned 5 points for shooting the alien`);
}
else{
    console.log(`You earned 10 points for shooting the alien`);
}
// • Write one version of this program that runs the if block and another that runs the else block.

// 2nd Version
alien_color = "red";
if(alien_color==="green"){
    console.log(`You earned 5 points for shooting the alien`);
}
else{
    console.log(`You earned 10 points for shooting the alien`);
}