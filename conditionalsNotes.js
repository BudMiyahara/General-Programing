// These are notes on conditionals in programming 
/* at its most basic level and conditional statment is jus "if -> then " 
some can be more complicated but all of temrely on the idea that you are checking if a conditional is true, and then
doig something based on the true/false nature of that conditional*/

// conditonals all rely on some sort of comparison

/* comparisons in java script, and most if not all programming languages look like math equations to some extent

a < b (is a less than b)
a > b (is a greater than b)
a == b (is a equal to be)
a <= b ( is a less than or equal too)
a >= b (is a greater than or equal to b)
*/

// examples:
let a = 5;
console.log(5 < 3);
console.log(5 > 3);
console.log(a == 5);
console.log(a == "5");

// java sript also has a "===", for "strict equality". this means that it will ask if a is equal to b and do the two varible have the same data type

console.log(a ==="5");


// the last symbol is "!" this means "not"

//test equality. we're going to chec if testnumber is greater than, less than, or equal to 6.

// as a rule you want to avoid nested if/else statments
// there are two better  aproaches


let testNumber = 81
if (testNumber <= 59){
    console.log(`${testNumber} Your Grade is an F`);
}else if (testNumber <= 69){
    console.log(`${testNumber} Your Grade is a D`);
} else if (testNumber <= 79){
    console.log(`${testNumber} Your Grade is a C`);
}else if (testNumber <= 89){
    console.log(`${testNumber} Your Grade is a B`);
}else if (testNumber <= 100){
        console.log(`${testNumber} Your Grade is a A`);
}

//logical oporators:
// modify or combine multiple logic statments
//and: && -> will only return true only if both statements are true
//or: || --> when iether are true
// not : ! --> flips true and false value


// clothing selector based on weather
// two variables: based on temperture and percipitation

let temperture = 85;
let percipitation = false;

//ternary opporator allows you to write simple and consice if/else statements. 

// the syntax for this is: condition? do this : else do this instead

