//These will be notes on data types

//there are 8 data types in java script
/*
1. numbers(both integers and floating point (decimals))
    - in addition to traditional numbers, the number data type includes infinity and NaN (not a number)
2. BigInt*/
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
//lets us go past max limit
/* 3. string
Letters, words, characters, numbers, symbols, that are treated like text*/
// + with strings produces concatenation : connecting two symbols one after the other
/* strings are generally formed by encapsulating symbols in quotations. in Java script there are three kinds of quotationss you can use.

"Hello"- double quotes
'Hello'- single quotes
`Hello`- back ticks*/

console.log("Hello, World!");
console.log('Hello, World!');

//if your string includes an apostrophe, use double quotes
//if they contoain a quotation, use single quotes

//backticks allow you to embed variable into a string
let myName = "Steve";
console.log(`Hello,${myName}`);

// you can also do math or other operations inside curly braces

console.log(`2 + 3 = ${2 + 3}`);

// many other programing languages have a "char" data type, representing a single character. Javascript does not.

/* Boolean
Boolean is named by george Bool, who did a lot of work with formal logic namely, ways to make decitions useing true and false statements. the boolean data type can hold only two data types
true or false*/

/* Null
This is a special datatype. It contains only one value: null.
"null" in java script means "nothing", "empty", of "value unknown"

Undifined 
this is another type of datatype. it contains only 1 value: undifined
Undifined means that the value has not been assigned.

let age' 
if you need to know the type of a variable, you can use typof() function*/
