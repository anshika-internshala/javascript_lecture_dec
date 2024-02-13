const users = [
  {
    firstName: "Anshika",
    lastName: "Agarwal",
    age: " 24",
  },
  {
    firstName: "Rahul",
    lastName: "Vishnoi",
    age: " 34",
  },
  {
    firstName: "Anshul",
    lastName: "Agarwal",
    age: "78",
  },
  {
    firstName: "Rohit",
    lastName: "Vishnoi",
    age: " 45",
  },
  {
    firstName: "Ankit",
    lastName: "Agarwal",
    age: "32",
  },
  {
    firstName: "Ronit",
    lastName: "Vishnoi",
    age: "4",
  },
];
// Print firstnames of all users whose age is greater then 25

// const filteredUsers = users.filter(user => user.age > 25);

// const finalArray = filteredUsers.map(user => user.firstName);

const result = users
  .filter((user) => user.age > 25)
  .map((user) => user.firstName);

console.log("filtered users", result);
