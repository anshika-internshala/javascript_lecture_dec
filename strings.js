let firstName = "Anshika";
console.log(firstName.length);

let lastName = "Agarwal";

// const fullName = firstName + " " + lastName;

// console.log(fullName);

// Template Literals

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

let sentence = `My name is ${fullName}` ;
console.log(sentence);

// upper case

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName);

console.log(fullName.slice(5));

const newName = firstName.concat(" " ,lastName, " awesome");
console.log(newName);

//trim -- removes whitespace
const hobby= " swimming    "
console.log(hobby.trim());

console.log(typeof(hobby));

