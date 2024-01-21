console.log("welcome to javascript");
/* 
    var --- global scoped
    let & const ---- local scoped
*/

var a = 10;
var a = 700;
console.log("value of a is", a); // 10

let c = 67;
console.log("value of c is", c); // 67

var anshika = ""

var $an = 8;
var _124 = 6;
{
    var a = 100;
    let c = 89;
    const d = 400;
    console.log("value of d in block", d);
    console.log("value of a inside block", a); // 100
    console.log("value of c inside block", c); // 89
}

const d = 78;

console.log("value of d", d);

console.log("value of a after block", a); //100

console.log("value of c after block", c); // 67

var Anshika1 = 2;

// let a = 9;
let b = 20;

b = 798;

const g = b;

console.log("value of g is", g);

const age = 12;