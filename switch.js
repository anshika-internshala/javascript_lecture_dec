const age = 18;
let result;
switch(age) {
    case 0 :
    case 18:
        result = "you are an adult";
        break;
    default :
        result = "invalid age";
}

console.log("result is", result);