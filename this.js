 "use strict"

// global scope
console.log(this);

// this in global scope points to global object 
// In browsers this global scope is window object

function abc() {
    console.log(this);  // window object
}

abc();

window.abc();

// Value of this keyword in function depends on strict/nonstrict mode
// In strict mode value of this keyword becomes "undefined" in functions
// In non strict mode , value of this keyword becomes "window" object

// Depends on how function is called

const userDetails = {
    firstName: "Anshika",
    lastName: "Agarwal",
    printName: function(hobby, age) {
        console.log(this); // current object in which this function is present
        // console.log(this.firstName + " " + this.lastName);
        // console.log("Hobby of user is ", hobby);
        // console.log("Age of user is ", age);
    },
    hobbies: {
        color: "red" ,
        print: () => {
            console.log("coming here")
            console.log(this);
        },
    },
    printDetails: () => {
        console.log(this); // window object
    }
}

// const userDetails1 = {
//     firstName: "Anshika",
//     lastName: "Agarwal",
//     printName: function(hobby, age) {
//         const printDetails = () => {
//             console.log(this); // userDetails1 object
//         }
//         console.log(this); // current object in which this function is present
//         printDetails();
//     },
   
   
// }

// userDetails.printName();
// userDetails.printDetails();

// In arrow functions , this keyword points to enclosing lexical context




