function x() {
    let a = 10; // lexical environment

    function y() {
        let a = 20;

        setTimeout(() => {
            console.log(a); 
        }, 1000)
  
    }

 return y;
}

let a = 100;

var result = x();

//console.log(result);

result();


// function z() {
//     let b = 800;

//     function x() {
//         let a = 7;

//         function y() {
//             console.log(a, b);
//         }

//     y();
//     }
// x();
// }

// z();
