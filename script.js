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
    //Disable the input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'green';

    //Set message
    setMessage(`${winningNum} is correct`, 'green');

  } else {




  }
});


//Set message

function setMessage(msg, color) {
  message.style.color = color;

  message.textContent = msg;
}