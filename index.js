"use strict";

var computerGuess,
  currentNumber = document.getElementById("currentNumber"),
  myGuess = document.getElementById("myGuess"),
  checkButton = document.getElementById("checkButton"),
  guessString = document.getElementById("guessString"),
  score = document.getElementById("score"),
  highscore = document.getElementById("highscore"),
  computerNumber = document.getElementById("computerNumber"),
  againButton = document.getElementById("againButton"),
  resetButton = document.getElementById("resetButton"),
  scoreAmount = 20,
  highScoreAmount = 0;

function resetGame() {
  //set the score to be 20
  score.textContent = scoreAmount;
  highscore.textContent = highScoreAmount;

  //the computer picks a random number
  computerGuess = Math.floor(Math.random() * 10 + 1);
  computerNumber.textContent = computerGuess;
  //I type a number into the box and push check
}

resetGame();

// Check if a number is typed into the box

checkButton.addEventListener("click", function () {
  var checkValue = parseInt(myGuess.value);
  console.log("Score Amount Initial:" + scoreAmount);
  if (scoreAmount > 0) {
    if (typeof checkValue == "number") {
      //it checks the number against the computer number and based on the result
      //writes either
      if (checkValue > computerGuess) {
        console.log(checkValue);
        console.log(typeof checkValue);
        guessString.textContent = "Please enter a lower number";
        scoreAmount--;
        score.textContent = scoreAmount;
        console.log("Score Amount -- no 1 :" + scoreAmount);
      } else if (checkValue < computerGuess) {
        console.log(checkValue);
        console.log(typeof checkValue);
        guessString.textContent = "Please enter a higher number";
        scoreAmount--;
        score.textContent = scoreAmount;
        console.log("Score Amount -- no 1 :" + scoreAmount);
      } else {
        console.log(checkValue);
        console.log(typeof checkValue);
        guessString.textContent = "You Guessed it Exactly!";
        console.log("Score Amount No Touch" + scoreAmount);
        score.textContent = scoreAmount;
        highScoreAmount = scoreAmount;
        highscore.textContent = highScoreAmount;
        //Disable check button and tell user to press try again on top
        document.getElementById("checkButton").disabled = true;
        guessString.textContent + "Please click the try buton";
        //do nothing to the score
      }
    }
  } else {
    window.alert("You cannot play, Please push Reset!");
  }
});

againButton.addEventListener("click", function () {
  resetGame();
  document.getElementById("checkButton").disabled = false;
  scoreAmount = 20;
  score.textContent = scoreAmount;
});
