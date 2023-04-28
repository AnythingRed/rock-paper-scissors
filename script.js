/* Begin with a function getComputerChoice that will randomly return either rock paper or scissors */
/* choose a random number between 0 and 2 and assign a string to each */
let computerChoice;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)
  if (randomNum === 0) {
    computerChoice = 'Rock';
  } else if (randomNum === 1) {
    computerChoice = 'Paper';
  } else if (randomNum === 2) {
    computerChoice = 'Scissors';
  } else {
    computerChoice = 'Unexpected Error';
  }
}
