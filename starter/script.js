'use strict';

let randomSecretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}
let displayScore = function (score){
    document.querySelector(".score").textContent = score;
}


document.querySelector(".check").addEventListener("click", function (){
    const guessedNumber = Number(document.querySelector(".guess").value)
    // User input no number
   if(!guessedNumber){
    displayMessage("Input a number");
   }
    // User input correct number
    else if (guessedNumber === randomSecretNumber){
        document.querySelector(".number").textContent = randomSecretNumber;
        displayMessage("You are correct!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
          }
    }
    // User inputs larger Number
    else if (guessedNumber !== randomSecretNumber){
        if(score > 1){
            displayMessage (guessedNumber > randomSecretNumber ? "Too high" : "Too low")
            score--;
            displayScore (score);
        } else {
            displayScore (0);
            displayMessage("You lost the game");
        }
    }
});

document.querySelector(".again").addEventListener("click", function(){
    randomSecretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    displayScore (score);
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...")
})