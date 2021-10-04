// import functions and grab DOM elements
const inputNumber = document.getElementById('input-number');
const submitButton = document.getElementById('submit-button');
const resultText = document.getElementById('result-text');
const guessesLeft = document.getElementById('guesses-left');
const restartButton = document.getElementById('restart-button');

// initialize global state
let numGuessesLeft = 4;
let randomNumber = Math.floor(Math.random() * 20) + 1;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButton.addEventListener('click', ()=> {
    const guess = Number(inputNumber.value);
    numGuessesLeft--;
    let userMessage;
    if(guess === randomNumber) {
        userMessage = 'You win.. for now';
        submitButton.style.display = 'none';
        restartButton.style.display = 'block';
    } else if (numGuessesLeft === 0) {
        userMessage = 'Out of guesses.. goodbye';
        submitButton.style.display = 'none';
        restartButton.style.display = 'block';
    } else if (guess > randomNumber) {
        userMessage = 'Number too high';
    } else if (guess < randomNumber) {
        userMessage = 'Number too low';
    }
    resultText.textContent = `${userMessage}`;
    guessesLeft.textContent = `You have ${numGuessesLeft} guesses left.`

});

restartButton.addEventListener('click', ()=> {
    numGuessesLeft = 4;
    resultText.textContent = ':)';
    guessesLeft.textContent = `You have ${numGuessesLeft} guesses left.`
    submitButton.style.display = 'block';
    inputNumber.value = '';
    randomNumber = Math.floor(Math.random() * 20) + 1;
});

