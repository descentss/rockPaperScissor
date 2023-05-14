"use strict";

// UI
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const roundVisual = document.getElementById("round");
const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");
const movePlayer = document.querySelector(".move-player");
const moveComputer = document.querySelector(".move-computer");
const results = document.querySelector(".results");

// Initial Data
let playerScore = 0;
let computerScore = 0;
let round = 1;
let roundWinner = "";

// Playing a round and scenarios
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = "It's a tie!";
    roundWinner = "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    roundWinner = "player";
  } else {
    results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    roundWinner = "computer";
  }
}

// Computer Move
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Checks if game is completed
function isGameComplete() {
  return playerScore === 5 || computerScore === 5;
}

// Game
// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt(
//       "Choose rock, paper, or scissors:"
//     ).toLowerCase();
//     const computerSelection = computerPlay();

//     const result = playRound(playerSelection, computerSelection);
//     console.log(result);

//     if (result.startsWith("You win!")) {
//       playerScore++;
//     } else if (result.startsWith("You lose!")) {
//       computerScore++;
//     }

//     const displayRoundAndScore = `Round ${round} Current Score: Player Score ${playerScore} and Computer Score ${computerScore}`;

//     console.log(displayRoundAndScore);
//   }

//   if (playerScore > computerScore) {
//     console.log("Congratulations! You won the game.");
//   } else if (computerScore > playerScore) {
//     console.log("Sorry, you lost the game.");
//   } else {
//     console.log("The game is tied!");
//   }
// }

// game();

// Adding event listeners on the moves
rockBtn.addEventListener("click", () => handleGame("rock"));
paperBtn.addEventListener("click", () => handleGame("paper"));
scissorBtn.addEventListener("click", () => handleGame("scissor"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

function handleGame(playerSelection) {
  if (isGameComplete()) {
    openEndgameModal();
    return;
  }

  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateVisuals(playerSelection, computerSelection);
  updateResults();

  if (isGameComplete()) {
    openEndgameModal();
    setFinalMessage();
  }
}

// Update the moves visually on the screen
function updateVisuals(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      movePlayer.textContent = "👊";
      break;
    case "paper":
      movePlayer.textContent = "✋";
      break;
    case "scissors":
      movePlayer.textContent = "✌️";
      break;
  }

  switch (computerSelection) {
    case "rock":
      moveComputer.textContent = "👊";
      break;
    case "paper":
      moveComputer.textContent = "✋";
      break;
    case "scissors":
      moveComputer.textContent = "✌️";
      break;
  }
}

// Updates the result score and round score
function updateResults() {
  if (roundWinner === "tie") {
    round++;
    roundVisual.textContent = `ROUND ${round}`;
  } else if (roundWinner === "player") {
    scorePlayer.textContent = `Player: ${playerScore}`;
  } else if (roundWinner === "computer") {
    scoreComputer.textContent = `Computer: ${computerScore}`;
  }
}

function openEndgameModal() {
  endgameModal.classList.add("active");
  overlay.classList.add("active");
}

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = "You won!")
    : (endgameMsg.textContent =
        "Don't worry, even the best rock-paper-scissors players lose sometimes. Let's try again and see if we can beat the odds!");
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  roundVisual.textContent = `ROUND ${round}`;
  results.textContent = "First to score 5 points wins the game";
  scorePlayer.textContent = "0";
  scoreComputer.textContent = "0";
  movePlayer.textContent = "❔";
  moveComputer.textContent = "❔";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}
