console.log(x); // undefined

var x;

let a = 20;

a = 45;

console.log(a); // 45
console.log(b); // undefined

var b = 15;

let c = 100;

 {
    console.log(b) // 15
    let z = 20;
    console.log(z); // 20
    b = 67;
    console.log (b); // 67
    c = 89;
    console.log (c); 89
 }

 console.log (c) ; // 89

 //console.log(z); // error ???

 console.log (b); // 67