// pending , rejected , accepted

let success = false;

const promiseObject = new Promise(function(resolve , onRejected) {
    if (success) {
        resolve("my request is successful");
    } else {
        onRejected("request is rejected");
    }
});

promiseObject.then(res => console.log("promise is successful", res));

promiseObject.catch(err => console.log("error", err));

