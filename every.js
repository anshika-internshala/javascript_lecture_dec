// every ---- checks whether every element of array satisfies condition
// some ---- even if one elemnt of the array satisfies condition

let arr = [1 , 2, 3, -4 , -6 ,7, 8];

// check whether all numbers are positive or not

const result = arr.every(function(num) {
    return num > 0;
})

const result1 = arr.some(function(num) {
    return num > 0;
})

console.log("result", result);
console.log("some result", result1);

