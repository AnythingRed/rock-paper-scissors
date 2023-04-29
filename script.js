/* global variables */
let computerChoice;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

/* computer chooses fighter (no problems) */
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

/* user chooses fighter (no problems) */
function getPlayerSelection() {
  playerSelection = prompt('Choose between rock, paper or scissors')
  
  if (!playerSelection) {
    console.log(`You didn't enter anything. Refresh the page if you wanna try again.`)
  } else if (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
      return playerSelection;
    } else {
      console.log(`You have to choose between rock, paper and scissors! Try again.`)
      getPlayerSelection();
    }
  }
}

/* function that plays a single round of rock paper scissors. takes two parameters playerSelection and computerSelection. returns a string that declares the winner of the round (no problems) */
function playRound() {
  getComputerChoice();
  console.log(computerChoice);
  getPlayerSelection();
  console.log(playerSelection);
  switch(true) {
    case computerChoice === playerSelection:
      return `It's a draw! You both chose ${computerChoice}.`;
      break;
    case computerChoice === 'rock' && playerSelection === 'paper':
      ++playerScore;
      return `You win! Paper beats rock.`;
      break;
    case computerChoice === 'rock' && playerSelection === 'scissors':
      ++computerScore;
      return `You lose! Rock beats scissors`;
      break;
    case computerChoice === 'paper' && playerSelection === 'rock':
      ++computerScore;
      return `You lose! Paper beats rock.`;
      break;
    case computerChoice === 'paper' && playerSelection === 'scissors':
      ++playerScore;
      console.log(playerScore);
      return `You win! Scissors beat paper.`;
      break;
    case computerChoice === 'scissors' && playerSelection === 'rock':
      ++playerScore;
      return `You win! Rock beats scissors`;
      break;
    case computerChoice === 'scissors' && playerSelection === 'paper':
      ++computerScore;
      return `You lose! Scissors beat paper.`;
      break;
    default:
      return `Unexpected error in round function`;
      break;
  }
}

/* write a new function called game. use the previous function to play a 5 round game that keeps score and reports a winner or loser at the end. */
/* use a loop to do 5 rounds or call playround function 5 times */


function game() {
let i = 0;

  while (i < 5) {
    playRound();
    console.log(playerScore);
    i++
  }
}

playRound();
console.log(playerScore);
console.log(computerScore);
/* var score and update it every turn */

/* report winner after every round */

