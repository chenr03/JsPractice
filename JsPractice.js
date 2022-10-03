//Variables are used to store data temporarily to a computer.

let name = 'chenry';
console.log(name);

// Names:

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive
//
// let firstName = 'Chris', lastName = 'Henry';
// or
// let firstName ='Chris';
// let lastName = 'Henry';

// camel notation

const interestRate = 0.3; // constants cannot be changed, where-as let or variables that are defined can.

console.log(interestRate);

// Primitives/ Value types:
//
// String
let name ='Chris'; // String Literal
// Number
let age = 30; //Number Literal
// Boolean
let isApproved = true; // Boolean Literal // can be true or false
// Undefined
let firstName = undefined;
// Null
let lastName = null; // when you want to delete a variable.

// Reference Types //
//
// Object//
const person = {
    name: 'Chris',
    age: 32

};

// dot notation
person.name = 'John';

// bracket notation
person['name'] = 'Mary';
console.log(person.name);
//{} = object literal

// Array //
let selectedColors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple'
]

// console.log(selectedColors);
// console.log(selectedColors[4]);
// console.log(selectedColors.length)

// Function //
function greet(name, lastName){
    // inside the () is parameter for the greet function
    console.log('Hello ' +  name + ' ' + lastName);

}

greet('John', 'Smith'); // inside the () is the argument of greet function
// should print Hello John Smith

// // Caluclating a value
// function square(number){
//     return number * number;
//
// }
//
// console.log(square(2));
// console.log // is a function call
// and square(2) // is also a function call


// operators //

// arithmetic, assignment, comparison, logical, bitwise

//
let x = 10;
let y = 3;

//console.log(x + y); // addition
//console.log(x - y); // subtraction
//console.log(x * y); // multiplication
//console.log(x / y); // division
console.log(x % y); // remainder after the division, therefore 10/ 3 would be 3 and a remainder of 1 ... will print 1
// console.log(x ** y); // takes x to the power of y = 1000

// Increment (++) // increments by 1

//console.log(++x)
//console.log(x++)

// Decrement (--)
// console.log(--x); decrements by 1


