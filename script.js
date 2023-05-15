/* global variables */
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const scoreEl = document.querySelector('.score');
const resultsEl = document.querySelector('.results');
const finResultEl = document.querySelector('.finResult');

function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors']
   computerChoice = choices[(Math.floor(Math.random() * choices.length))];
}

function updateScore() {
   scoreEl.textContent = `Gamer ${playerScore} : ${computerScore} Enemy`
}

function roundResult() {
   resultsEl.textContent = playRound();
}
/* play a single round of rock paper scissors. returns a string that declares the winner of the round */
function playRound() {
  getComputerChoice();
  switch(true) {
    case computerChoice === playerChoice:
      return `It's a draw. You both chose ${computerChoice}.`;
      break;
    case computerChoice === 'rock' && playerChoice === 'paper':
      playerScore++;
      return `You win this round. Paper beats rock.`;
      break;
    case computerChoice === 'rock' && playerChoice === 'scissors':
      computerScore++;
      return `You lose this round. Rock beats scissors`;
      break;
    case computerChoice === 'paper' && playerChoice === 'rock':
      computerScore++;
      return `You lose this round. Paper beats rock.`;
      break;
    case computerChoice === 'paper' && playerChoice === 'scissors':
      playerScore++;
      return `You win this round. Scissors beat paper.`;
      break;
    case computerChoice === 'scissors' && playerChoice === 'rock':
      playerScore++;
      return `You win this round. Rock beats scissors`;
      break;
    case computerChoice === 'scissors' && playerChoice === 'paper':
      computerScore++;
      return `You lose this round. Scissors beat paper.`;
      break;
    default:
      return ``;
      break;
  }
}

function showFinResult() {
   if (playerScore === 5 && computerScore === 5) {
      finResultEl.textContent = `It's a draw! We're both winners in our own way.`;
   } else if (computerScore === 5) {
      finResultEl.textContent = `You lost. I hope you enjoyed your brief moment of hope before reality came crashing down on you.`;
   } else  if (playerScore === 5) {
      finResultEl.textContent = `You won! Maybe we can have a rematch?`;
   }
}

function game() {
   roundResult();
   updateScore();
   showFinResult();
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
   playerChoice = 'rock';
   game();
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
   playerChoice = 'paper';
   game();
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
   playerChoice = 'scissors';
   game();
});
