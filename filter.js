//filter ---- filter contents from an array based on some condition

// return a new array

let a = [ 1 , 2, 3 ,4 , 5, 6];

//const pantArray =clothes.filter((product)=> product.type == "pant")

// even numbers

const evenNumbers = a.filter(function(num){
    return num % 2 == 0;
});

const even = a.filter((num) => num % 2 == 0);

console.log("even numbers", evenNumbers);
console.log("even numbers", even);
console.log("original array", a);
