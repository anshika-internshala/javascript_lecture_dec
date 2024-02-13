// callback function ----- function which is passed as parameter to another function

// function step1(num) {
//     return num + 1;
// }

// function step2(num) {
//     return num + 2;
// }

// function step3(num) {
//     return num + 3;
// }

// function doOperation() {
//     let result = 0;

//     result = step1(result); // 1
//     result = step2(result); // 3
//     result = step3(result); // 6

//     console.log(`result ${result}`);
// }

// doOperation();

// callbacks

function step1(num, callback) {
    const result = num + 1;
    callback(result);
}

function step2(num, callback) {
    const result = num + 2;
    callback(result);
}

function step3(num , callback) {
    const result = num + 3;
    callback(result);
}

// callback hell
// Pyramid of doom

function doOperation() {
    step1(0, (result1) => {
        step2(result1, (result2) => {
            step3(result2, (result3) => {
                console.log("result3", result3);
            } )
        } )
    })
}

doOperation();
 