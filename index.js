let computerValue;
let computerSelection;

let output = document.getElementById("output");

let playerCount = 0;
let computerCount = 0;

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    let outputContent;
    
    if (playerSelection.includes("rock") && computerSelection.includes("scissors") ||
        playerSelection.includes("paper") && computerSelection.includes("rock") ||
        playerSelection.includes("scissors") && computerSelection.includes("paper")) {
        playerCount = playerCount++;
        if (playerCount == 5) {
            outputContent = `You Win The Game! ${playerSelection} beats your ${computerSelection}. You have beat the computer by a score of 5 to ${computerCount}`;
        }
        else {
            outputContent = `You win this round! ${playerSelection} beats your ${computerSelection}. Score is ${playerCount} for you and ${computerCount} for the computer.`;
        }
       
    }
    else if (playerSelection.includes("rock") && computerSelection.includes("paper") ||
             playerSelection.includes("paper") && computerSelection.includes("scissors") ||
             playerSelection.includes("scissors") && computerSelection.includes("rock")) {
        computerCount = computerCount++;
        if (computerCount == 5) {
            outputContent = `You Lose The Game! ${computerSelection} beats your ${playerSelection}. You have lost by a score of 5 to ${playerCount}.`;
        }
        else {
            outputContent = `You lost this round! ${computerSelection} beats your ${playerSelection}. Score is ${playerCount} for you and ${computerCount} for the computer.`;
        }
    }
    else {
        outputContent = `You Draw! Both drew ${computerSelection}. Score is ${playerCount} for you and ${computerCount} for the computer.`;
    }
    output.textContent = outputContent;
}

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    playerSelection = button.textContent;
    button.addEventListener("click", () => {
        playRound(playerSelection, computerSelection);
    });
    console.log(button);
})

// function game() {
//     let result =[];
//      for (let i = 0; i < 5; i++) {
//         const playerSelection = window.prompt("Rock, paper or scissors?");
//         const computerSelection = computerPlay();
//         result += playRound(playerSelection, computerSelection);
//      }
//      return result;
// }

// console.log(game());