// An object is an entity which has properties and methods

const userDetails = {
    firstName: "Anshika",
    lastName: "Agarwal",
    printName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

const userHobbies = {
    printHobbies() {
        console.log("hobbies of the user");
    }
}

const anshika = {
    hobby: "teaching",
}

const keshav = {
    hobby: "studying"
}

const hima = {
    hobby: "learning"
}

// anshika.prototype.printHobbies11 = function () {
//     console.log("user is anshika");
// }

anshika.__proto__ = userHobbies;

anshika.printHobbies();

hima.__proto__ = userHobbies;
keshav.__proto__ = userHobbies;

hima.printHobbies();
keshav.printHobbies();

let arr = ["apple", "mango", "guava"];

Array.prototype.myFunction = function () {
    console.log("learning array prototypes");
}

// function myFunction1 () {
//     console.log("proto function");
// }

// arr.__proto__ = myFunction1;

// arr.prototype.myFunction1();
console.log("array", arr);

Array.prototype.myfunc = function () {


}

let cars = [];


