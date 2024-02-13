// map ----> transforms content of the array

// Always returns a new array

// print the square of each element of array

let a = [ 1, 2, 3, 4, 5];

// output [ 1 , 4, 9, 16, 25]

let squaredArray = a.map(function(element) {
    return element * element;
})

console.log("square of the elements using map function", squaredArray);

const squareArray = [];

for(let i = 0; i< a.length; i++) {
    squareArray.push(a[i] * a[i]);
}

console.log("Square elements of array", squareArray);





