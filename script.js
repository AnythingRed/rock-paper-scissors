/* global variables */
let computerChoice;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

/* computer chooses fighter */
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
/* user chooses fighter */
function getPlayerSelection() {
  playerSelection = prompt('Choose between rock, paper or scissors')
  
  if (!playerSelection) {
    console.log(`You didn't enter anything. Feel free to try again.`)
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
/* play a single round of rock paper scissors. returns a string that declares the winner of the round */
function playRound() {
  getComputerChoice();
  getPlayerSelection();
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
      return ``;
      break;
  }
}
/* shows the final result */
function result() {
  if (playerScore > computerScore) {
    console.log(`You won! Maybe we can have a rematch?`)
  } else if (playerScore < computerScore) {
    console.log(`You lost. I hope you enjoyed your brief moment of hope before reality came crashing down on you.`)
  } else {
    console.log(`It's a draw! We're both winners in our own way.`)
  }
}
/* plays 5 rounds of rock paper scissors, resets score after finishing */
function game() {
  let i = 1;
  
  while (i < 6) {
    console.log(`Round ${i}`)
    console.log(playRound());
    console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
    if (!playerSelection) break;
    i++
  }
  result();
  playerScore = 0;
  computerScore = 0;
  return 'Hope you had fun, I know I did.'
}
