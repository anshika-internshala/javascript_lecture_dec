let randomNumber = Math.trunc(Math.random() * 20) + 1;

console.log("random number", randomNumber);

const guessElement = document.querySelector(".guess");

console.log("guess element", guessElement);

const checkBtn =document.getElementById("check-btn");

console.log("Id", checkBtn);

checkBtn.addEventListener("click", checkGuessNumber);

const messageText = document.querySelector(".message");

let scores = 20;

const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");

const number  = document.querySelector(".number");
const body = document.querySelector("body");
const resetButton = document.querySelector(".again");

function checkGuessNumber() {
    let userValue = Number(guessElement.value);
    console.log("userValue", userValue);

    if (!userValue) {
        alert("No Number Entered");
    } else if (userValue < 1 || userValue > 20) {
        alert ("Please enter number between 1 and 20");
    } else if (userValue === randomNumber) {
        messageText.textContent = "Correct Number";
        highScoreElement.textContent = scores;
        number.textContent = randomNumber;
        body.style.backgroundColor = "green";
    } else if (userValue < randomNumber) {
        scores--; // scores = scores -1;
        scoreElement.textContent = scores;
        messageText.textContent = "too low!"
    } else {
        scores--;
        scoreElement.textContent = scores;
        messageText.textContent = "too high";
    } 

}

let reset = 0;
resetButton.addEventListener('click', resetGame);

function resetGame() {
    //window.location.reload();
    body.style.backgroundColor = "black";
    scoreElement.textContent = 20;
    highScoreElement.textContent = 0;
    messageText.textContent = "Start guessing...";
    number.textContent = "?";
    guessElement.value = "";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("random number", randomNumber);
}

const newElement = document.createElement("div");
newElement.textContent= "learning dom";
const mainElement = document.querySelector("main");
mainElement.appendChild(newElement);

// const email =  document.getElementsByName("email");
// const emailString = email.value;

// const password =  document.getElementsByName("password");
// const passwordString = email.value;

// if (emailString === "admin@admin.com" && passwordString === "23456") {
//     alert("Login Successful");
// } else {
//     alert ("incorect")
// }




