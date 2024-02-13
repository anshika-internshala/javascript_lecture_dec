// returns first element of the array which satisfies condition

const a = [ 1 ,2 ,3, -6 , -8,9];

// find any negative number

const negative  = a.find((num) => num < 0);

const index = a.findIndex(num => num < 0);

console.log("negative", negative);

console.log("negative Index", index);

