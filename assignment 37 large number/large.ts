// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size :string = "large", message:string="I love Typescript" ){

console.log(`${size}, ${message}`);
}
make_shirt(); //default value does not need argument
make_shirt("medium"); // function parameter is also replaceable
make_shirt("small" , "coding is life");