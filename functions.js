let a = 100;
let b = 204;

// const result = sum(a, b);
// console.log("result", result);

// function sum(a, b) {
//     const add = a + b;
//     return add;
// }

// const sum = (a, b) =>  {
//    return  a+b
// };


// function mul(a, b) {
//     const mul = a * b;
//     console.log("mul of two numbers is", mul);
// }

const mul = (a, b) => {
    let res = a * b;
    console.log("mul of two numbers is", res);
    return res;
};

const multiplication = mul(a, b);
console.log("multiplication", multiplication);

// var vs let vs const ---- 2015 , ES6
// arrow functions