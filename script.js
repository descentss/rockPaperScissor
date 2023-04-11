"use strict";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose rock, paper, or scissors:"
    ).toLowerCase();
    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You win!")) {
      playerScore++;
    } else if (result.startsWith("You lose!")) {
      computerScore++;
    }

    const displayRoundAndScore = `Round ${round} Current Score: Player Score ${playerScore} and Computer Score ${computerScore}`;

    console.log(displayRoundAndScore);
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game.");
  } else if (computerScore > playerScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("The game is tied!");
  }
}

// game();

function game() {
  const rock = document.querySelector("button:nth-of-type(1)");
  const paper = document.querySelector("button:nth-of-type(2)");
  const scissor = document.querySelector("button:nth-of-type(3)");
  rock.addEventListener("click", () => {
    const playerSelection = "rock";
  });
}
