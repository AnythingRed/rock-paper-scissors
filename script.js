/* Begin with a function getComputerChoice that will randomly return either rock paper or scissors */
/* choose a random number between 0 and 2 and assign a string to each */
let computerChoice;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3)
  if (randomNum === 0) {
    computerChoice = 'rock';
  } else if (randomNum === 1) {
    computerChoice = 'paper';
  } else if (randomNum === 2) {
    computerChoice = 'scissors';
  } else {
    computerChoice = 'Unexpected Error in getComputerChoice function';
  }
}
/* make playerSelection case insensitive */

let playerSelection = prompt('Choose between rock, paper or scissors').toLowerCase();
console.log(playerSelection);
/* write a funcction that plays a single round of rock paper scissors. take two parameters playerSelection and computerSelection. return a string that declares the winner of the round like so: You lose! Paper beats Rock */

function round() {
  switch(true) {
    case computerChoice === playerSelection:
      return `It's a draw! You both chose ${computerChoice}.`;
      break;
    case computerChoice === 'rock' && playerSelection === 'paper':
      return `You win! Paper beats rock.`;
      break;
    case computerChoice === 'rock' && playerSelection === 'scissors':
      return `You lose! Rock beats scissors`;
      break;
    case computerChoice === 'paper' && playerSelection === 'rock':
      return `You lose! Paper beats rock.`;
      break;
    case computerChoice === 'paper' && playerSelection === 'scissors':
      return `You win! Scissors beat paper.`;
      break;
    case computerChoice === 'scissors' && playerSelection === 'rock':
      return `You win! Rock beats scissors`;
      break;
    case computerChoice === 'scissors' && playerSelection === 'paper':
      return `You lose! Scissors beat paper.`;
      break;
    default:
      return `Unexpected error in round function`;
      break;
  }
}
getComputerChoice();
console.log(computerChoice);
console.log(round());