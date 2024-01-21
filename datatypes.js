var abc = "anshika";

console.log(typeof(abc));

var qwerty = null;

var c1;

console.log(typeof(c1));



console.log(typeof(qwerty)); // null

var c = undefined;

console.log(typeof(c));

var num = BigInt(123) + BigInt(567);
console.log(num);
console.log(typeof(num));

var ann = Symbol(67);

console.log(typeof(ann));

var isExpensive = true;

console.log(typeof(isExpensive));

// Object ---- non primitive datatypes

const person = {
    firstName: "Anshika",
    lastName: "Agarwal"
}

// person = 89; ---- wrong

person.firstName = "anshul";
person.age = "12";

console.log(person);

console.log(person.firstName);
console.log(person["firstName"]);

console.log(typeof(person));

var hobby = "swimming";

var age1 = 45;

console.log(typeof(hobby + age1));

console.log(typeof(hobby));

// type coercion in javascript
