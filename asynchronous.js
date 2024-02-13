console.log("Hiiii");

// setTimeout(() => {
//     console.log("asynchronous javascript 2s");
// }, 2000);

setTimeout(() => {
    console.log("asynchronous javascript 1s");
}, 5000);

// setTimeout(() => {
//     console.log("asynchronous javascript 0s");
// }, 0);

const result = fetch("https://dummy.restapiexample.com/api/v1/employee/1");

result.then((data) => data.json()).then((data) => console.log(data));

result.catch(err => console.log("error in fetching data", err));

console.log("result", result);
console.log("I am Anshika");

console.log("Javascript");
