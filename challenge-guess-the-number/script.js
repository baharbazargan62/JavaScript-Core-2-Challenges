let randomNumber = Math.floor(Math.random() * 100 + 1);
const tries = document.querySelector(".Tries-output");
const Input = document.querySelector(".final-output");
let numberOfTries = 7;
tries.innerText = `number of tries : ${numberOfTries}`;
function guessNumber() {
  //Collect input from the user
  let guess = Number(document.querySelector(".inputs-Values").value);
  if (guess > 100 || guess < 1 || guess === "" || !guess) {
    Input.innerText = "Please enter a number between 1 and 100";
  } else if (guess === randomNumber) {
    Input.textContent = `${guess} "is correct, You Win!!!`;
    tries.innerText = `It took you ${numberOfTries} tries`;
  } else if (guess > randomNumber) {
    if (numberOfTries > 1) {
      Input.textContent = "Numbers is too high,try again";
      numberOfTries--;
      tries.innerText = `number of tries : ${numberOfTries}`;
    } else {
      tries.innerText = `You Lose, the number was ${randomNumber}`;
      Input.innerText = "";
      numberOfTries = 0;
    }
  } //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (guess < randomNumber) {
    if (numberOfTries > 1) {
      Input.textContent = "Numbers is too low,try again";
      numberOfTries--;
      tries.innerText = `number of tries : ${numberOfTries}`;
    } else {
      tries.innerText = `You Lose, the number was ${randomNumber}`;
      Input.innerText = "";
      numberOfTries = 0;
    }
  }
}

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  randomNumber = Math.floor(Math.random() * 100 + 1);
	console.log(randomNumber);
	//Reset users input field
	document.querySelector(".inputs-Values").value = "";
	//Reset tries, and triesTaken by the user
	numberOfTries = 7;
	tries.innerText = `Number of Tries: ${numberOfTries}`;
	Input.innerText = "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
