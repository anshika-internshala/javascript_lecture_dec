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

