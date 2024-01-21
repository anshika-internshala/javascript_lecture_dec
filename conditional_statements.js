// if
// if ...else
// if...else ...if .... else

// if(condition){
            // execute this code
//}

/**
 * if(condition){
 * //
 * }
 * else {
 * //
 * }
 */

alert("Hello");

const age = prompt("Enter your age", "56");

if(age > 0) {
    if (age < 10) {
        console.log("You are a kid");
    } else if (age >= 10 && age < 18 ) {
        console.log("You are a boy/girl");
    } else {
        console.log("You are an adult");
    }
} else {
    console.log("Invalid age");
}

