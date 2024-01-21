for(var a=100; a>=1; a-- ) {
    console.log(a);
}

// for in ---- keys of object

const users = {
    Anshika: "red",
    Ankit: "blue",
    Ayush: "green",
    ritu: "yellow"
}

// Object methods ---- Object.keys

// console.log(Object.keys(users));
// console.log(Object.values(users));

for (let a in users){
    console.log(users[a]);

    // users["Anshika"]
    // users ["Ankit"]
    // users [ "Ayush"]
    // users ["ritu"]
}


const example = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednedsay"};

for (let day in example) {
    console.log(example[day]);
}


let i = 1;

while (i < 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i < 10)
