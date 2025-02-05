//functuons are used if you need to repetedly reuse a command

/* functionName(argument1, argument 2, ect);

make a function that returns a message about a favorit animal*/

function favoriteAnimal(animal){
    return animal + " is my favorite animal";

}

console.log(favoriteAnimal("Panda"));

//what happens inside a functio is frequently invisibe to the out side world
// this is refered to in programming as "scope"
// Global scop: the main program
//local scope: within a function

//demenstration of scope

let test1 = 1
let test2 = 5

function add1(num) {
    test2 = test1 + 1
    return num + 1;
}

console.log(add1(test1));
console.log(test1);
console.log(test2);

// a function can change the value of a global variabel but only if the variable is used by name within the function.
// variables that are passed by arguments to the function, will remain unchanged

//we can make an optional parameters

function greetings(name = "Bud"){
    console.log(`Hello, ${name}`);
}

greetings("Mr. Smith");
greetings("Bud");
greetings("Wyatt");