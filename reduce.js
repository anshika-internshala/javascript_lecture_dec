// reduce -- iterate through contents of an array and return single value

// sum all contents of an array

let a = [ 1, 2, 3, 4, 5];

let sum =  0;

for(let i=0; i<a.length; i++) {
    sum = sum + a[i];
}

console.log("sum of elements is", sum);

// reduce

const sumValue = a.reduce(function(current, result) {
    return current + result;  // 0 + 1 = 1  2+1 = 3 3+3 = 6 6+4 = 10 10+5=15
}, 0);

console.log("sum of numbers", sumValue);
console.log("original array", a);

