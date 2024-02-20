const userDetails = {
    firstName: "Anshika",
    lastName: "Agarwal",
    printName: function(hobby, age) {
        console.log(this.firstName + " " + this.lastName);
        console.log("Hobby of user is ", hobby);
        console.log("Age of user is ", age);
    }
}

userDetails.printName("teaching", 67);

const user2 = {
    firstName: "Anshul",
    lastName: 'Agarwal'
}
//user2.__proto__ = userDetails;

// function borrowing in JS
userDetails.printName.call(user2, "cooking", 65);

const user3 = {
    firstName: "Sweety",
    lastName: "Gupta"
}

userDetails.printName.call(user3, "dancing", 78);

userDetails.printName.apply(user3, ["dancing", 78]);

const printNameFunc = userDetails.printName.bind(user3);
printNameFunc("dancing", 78 );

