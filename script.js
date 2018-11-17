//Game values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;


//UI elements

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');


//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


//Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);


  //Validate the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red');
    guessInput.style.borderColor = 'red';
  }

  //Check if won
  if (guess === winningNum) {
    //Game ove - won

    gameOver(true, `${winningNum} is correct. YOU WIN!`)

    // I should add this thing to the function below: message.style.backgroundColor = 'rgb(176,224,230)';



  } else {

    //Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over-lost
      gameOver(false, `Game Over, you lost.The correct number was ${winningNum}`);
      // //Disable the input
      // guessInput.disabled = true;
      // //Change border color
      // guessInput.style.borderColor = 'red';
      // message.style.backgroundColor = 'rgb(252,166,166)';

      // //Set message
      // setMessage(`Game Over, you lost.The correct number was ${winningNum}`, 'red');
    } else {
      //Game continues - answer wrong

      //Change the border color
      guessInput.style.borderColor = 'red';

      //Clear input
      guessInput.value = '';
      //Tell user it is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');

      message.style.backgroundColor = 'rgb(230,230,250)';

    }


  }
});



//Game over

function gameOver(won, msg) {

  let color;
  won === true ? color = 'green' : color = 'red';
  //Disable the input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //Set the text color
  message.style.color = color;


  //Set message
  setMessage(msg);
}
//Set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}