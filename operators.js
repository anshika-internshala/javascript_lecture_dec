var a = 10;
console.log(a);  // 10
console.log(a++); // 10 ----- a = 11
console.log(a--); // 11 ------ a = 10

console.log(++a); // 11
console.log(++a); // 12
console.log(a++); // 12
console.log(--a); // 12

var sum = 45;

var x = 10;
var y = 10;
var x = x - y;

x-=y; // x= x - y;


console.log(x); // 20

var g = 45;
var h = "45"; 

console.log(g == h); // true -- checking value only
console.log(g === h); // false --- checking data type and value both
console.log(g != h); // false -- checking value
console.log(g !== h); // true

var num1 = 23;
var num2 = 45;
var num3 = 45;

console.log(num1 > num2); // false
console.log(num1 < num2); // true;
console.log(num2 > num3); // false
console.log(num2 >= num3); // true

// logical operators

console.log((num2 >= num3) && (num1 < num2)); // true
console.log((num1 > num2) || (num1 < num2)); // true
console.log(!false);