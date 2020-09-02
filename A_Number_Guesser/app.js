/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),      
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
if(e.target.className === 'play-again'){
  window.location.reload();
}
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  //Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //check if right guess
  if(guess === winningNum) {
    //Game Over and a WIN
    gameOver(true, `${winningNum} is correct. You WiN!`);

  } else {
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      //Game over(lost)
    gameOver(false,`Game Over, sorry you lost. The correct number was ${winningNum}`);
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is incorrect, ${guessesLeft} guesses left..`, 'red');
    }
  }
  // console.log(guessInput.value);
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //disable input
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  //Set message
  setMessage(msg);

  //Play Again?

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}



