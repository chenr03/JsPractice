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

// Bitwise Operators //

//a: 1 = 000000010
//b: 2 = 00000010

// READ, WRITE, Execute
// 00000100
// 00000010
// 00000001

// const readPermission = 4;
// // const writePermission = 2;
// // const executePermission = 1;
// //
// // let myPermission = 0;
// // myPermission = myPermission | readPermission | writePermission;
// //
// // let message = (myPermission & readPermission) ? 'yes': 'no';
// //
// // console.log(message);

// swapping variables //
// let a = 'red';
// let b = 'blue';
//
// // console.log(a);
// // console.log(b);
//
// let c = a;
// a = b;
// b = c;
//

// if and else //

// if (condition){
//     statement
// } else if (another condition){
//     statement
// } else if {
//     statement
// } else if {
//     statement
// } else {
//     statement
// }

// example //
// let hour = 10;
//
// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning')
// }
// else if (hour >= 12 && hour < 18) {
//     console.log('Good afternoon')
// }
// else {
//     console.log('Good evening');
// };

// -------//

// switch cases //

// let role = 'moderator';
//
// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//
//
//     default:
//         console.log('Unknown User');
// }
//
// // -------//

// For Loops //


for (let i = 0; i < 5 ; i++) {
    console.log(1 + i + i)
}


//Writing Loops //

//Infinite Loops // these are bad

// let i = 0;
// while (i < 5) {
//     console.log(i)
// } // this is because we did  not increment i {i++}

// Max of Two Numbers
//let number = max(5, 20);
// console.log(number);
//
// function max(a, b) {
//   return (a > b) ? a:b
//   }
//

// Landscape or Portrait

// console.log(isLandscape(300, 600))
//
// function isLandscape(width, height) {
//     return (width > height);
// }

// Check Speed Function {
checkSpeed(75);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('Under the Speed Limit');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        else
            console.log('Points', points);
    }
}
//}

// ODD and Even
showNumbers(10);

function showNumbers(limit) {
    for(let i =0; i <= limit; i++) {
        if (i % 2 ===0) console.log(i, 'EVEN');
        else console.log(i, 'ODD')
    }
}
//                   //

// Count Truthy //

const array = [0, '', 1, 2, 3, '4', NaN, undefined, null];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}

//                  //

// type of obj[key]

//object-oriented Programming (OOP);

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // calling the draw method of the circle function

// //

// Factory Function

function createCircle(radius){
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}



const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//

// Dynamic Nature of Objects //

const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function (){

}

delete circle.color;
delete circle.draw;

console.log(circle);

/////////////////

// let address = {
//   street: "1856 Harbor Mill Drive",
//   city: "Fenton",
//   zipcode:"63026",
// };

//   function showAddress(address) {
//       for (let key in address)
//         console.log(key, address[key]);
//     }

// showAddress(address);

let address = createAddress('a', 'b', 'c');

console.log(address);

function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}

/////// Prints the street, city and zipcode inside its own object array

// re evaluating an array : //


let numbers = [1, 2, 3, 4];
let another = numbers;

// // Solution 1
// numbers = [5, 6, 7, 8];

// console.log(another);
// console.log(numbers);

// // Solution 2
// numbers.length = 0;

// // Solution 3
// numbers.splice(0, numbers.length);

// // Solution 4
// while (numbers.length > 0)
//   numbers.pop();

// console.log(another);
// console.log(numbers);

//////

const numbers = [1, -1, 2, 3];

// every() every element in the array is true or false
// some() checks to make sure that some of the values in the object are true

const somePositive = numbers.some(function(value){
    return value >= 0;
})
console.log(somePositive)
////
