//This is a comment.
//We will use a combination of comments and codes to build up our notes.

// We start by declaring a variable


 //Here is a different way to declare a variable:
 const e = 2.71828
 console.log(e);
// e = (3.1415);
//  console.log (e);
// ^^^ this crates an error

 // a third way to crate a variable:
 
 var pi = 3.1415;
 console.log(pi);
 pi = e;
 console.log(pi);

 // var and let are pretty interchangable, but const maes
//cant be changed

let total = 0;
let i = 0;
while (i < 1001){
    total = total + i;
    i = i + 1;
}
console.log(total);


// We'll start looking at numbers and math below
// Java script can add
console.log(23+97);

let sumOfSix = 1 + 2 + 5 + 8 + 24;
console.log(sumOfSix)
let a = 2;
a * sumOfSix;

// you can do math in the console including using variables from javascript file you ran
//simulation of calculating percent error
const actual = 57;
let prediction = actual - 13;
let percentage = prediction / actual;
let percentError = 1 - percentage;
console.log(percentError)

/* starts a multiline, or block comment*/



/* mathmatical orpotators in javaScript
+ -> addition
- -> subtraction
* -> multiplication
/ -> division
** -> exponential 
% -> Modulus

Javascript will work like a scientific calculator and apply order of opporations
*/
//unlie many other programing languages javascript only has 1 number type. other languages frequently have at least 2 types most commonly "int"- integers or float- floating point numbers
//there are somer rules for variables names in javascript
//1. the nam may contain only letter s, digits, or the symbol $ and _
// the first character may not be a digit
// they cannot br "reserved" words. ("let" "const" or console.log')