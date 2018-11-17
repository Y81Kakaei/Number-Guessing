//Game values

let min,
  max,
  randomNumber,
  winningNum,
  guessesLeft = 3;


//UI elements

const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message'),
  ///Extra buttons
  minInput = document.querySelector('#min-input'),
  maxInput = document.querySelector('#max-input'),
  minMaxBtn = document.querySelector('#minMax-btn'),
  minMaxMessage = document.querySelector('.minMaxMessage');

//Setting max and min event listener
minMaxBtn.addEventListener('click', function () {
  //Validate the input
  if (minInput.value == '' || maxInput.value == '') {

    minMaxMessage.textContent = 'Please Enter a Number';
    minMaxMessage.style.borderColor = 'red';
    minMaxMessage.style.color = 'red';
    minMaxMessage.style.backgroundColor = 'rgb(252,166,166)';
    minMaxMessage.className = 'alert'

  } else {
    minMaxMessage.remove();
    min = parseInt(minInput.value);
    max = parseInt(maxInput.value);
    minNum.textContent = min;
    maxNum.textContent = max;


    //Setting the winning number
    winningNum = Math.floor(Math.random() * (max - min - 1) + min);
    console.log(winningNum);


  }

})


//Play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }

})


//Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  //Validate the input
  if (isNaN(guess) || guess < min || guess > max) {

    setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red');
    guessInput.style.borderColor = 'red';
    message.style.backgroundColor = 'rgb(252,166,166)';

  } else if (guess === winningNum) {
    //Game over - won

    gameOver(true, `${winningNum} is correct. YOU WON!`)

    message.style.backgroundColor = 'rgb(176,224,230)';



  } else {

    //Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over-lost
      gameOver(false, `Game Over, you lost.The correct number was ${winningNum}`);
      message.style.backgroundColor = 'rgb(252,166,166)';

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

  //Play again 
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}


//Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}