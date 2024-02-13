var x;
console.log(x); // undefined
x = 89;
console.log(x); // 89
console.log(a); // undefined
var a = 10;
var b = 20;

// function hoisting in js



// function declaration
// function square(num) {
//     return num * num;
// }

// function expression
var square = (num) => num * num;

var square1 = square(2);

console.log("square1 before execution", square1) // undefined

var square2 = square(4);

console.log("square1", square1); // 4
console.log("square2", square2); // 16


// Memory allocation

// a : undefined ---- 10
// b: undefined ---- 20
// function
// square1 : undefined ---- 4
// square2: undefined ---- 16

// Code Execution
// a = 10;
