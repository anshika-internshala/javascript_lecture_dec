// Higher Order Functions

// function which takes another function as argument

let a = [1, 2, 3, 4, 5];

const length = a.length;

console.log("length of array", length);

// for (let i=0; i<length; i++) {
//     console.log(a[i]);
// }

let res = "";

// forEach
a.forEach(function(num) {
    //res = res + " " + num;
    res = `${res} ${num}`
})

console.log("result", res);

// Template Literals
//res = res + " " + num;

const firstName = "Anshika";
const lastName = "Agarwal";

const fullName = firstName + "hello" + lastName;

const fullName1 = `${firstName} hello ${lastName}`;

console.log("fullName", fullName1);



