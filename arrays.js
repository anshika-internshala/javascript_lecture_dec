const fruit = "apple";

const fruits = ["banana", "apple", "grapes"];

const a = [ 6, "javacript", true]; // different datatypes

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


console.log(a[1]);

console.log(fruits.length);

fruits[1]= "guavas";
console.log(fruits[1]);

console.log(typeof(fruits));

// convert an array to string

let b = [1 , 5 , 7];

console.log(b);

const result = b.toString();
console.log(typeof(result));

// pop --- remove last element of array
const value = b.pop();

console.log(value); // 7

console.log(b.length);

console.log(b);

// push --- add new elemnt at end of the array
let arr = [7 , 1 , 2 , 8, 9];

const ret = arr.push(10); // returns the new length of the array

console.log(ret);

console.log(arr);

// shift -- removes first element
 arr.shift();
 console.log(arr);

 // unshift ---- add first element

 arr.unshift(78);
 console.log(arr);

 // concat()

 let arr1 = [ 1, 2, 3];
 let arr2 = [ ];
 let arr3 = [ 7, 8, 9];

 arr2 = arr1;

 const newArray = arr1.concat(arr2, arr3);

//  console.log("replaced", arr2.replace(arr1));

 console.log(arr1);
 console.log(arr2);
 console.log(arr3);
 console.log(newArray);

 // splice
 let arr4 = [ 1, 2, 3, 7 , 9];

 const items = arr4.splice(1, 4, 45, 78, 90);

 console.log(items);

 console.log(arr4);

 // slice

 const nums = [1 , 2 , 3 , 4 , 5];

 const res = nums.slice(2, 4);

 console.log(res);

 //reverse

 console.log(nums.toReversed());

 console.log(nums);

 //delete

 let f = [ 6, 7, 8, 9];
 delete(f[3]);

 console.log(f);







