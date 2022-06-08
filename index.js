let computerValue;
let computerSelection = computerPlay();
let results;

let playerCount = 0;
let computerCount = 0;

function computerPlay() {
    let computerHand = Math.random();
    
    switch (true) {
        case (computerHand < 0.33):
            computerValue = "Rock";
            console.log("Computer plays: Rock");
            break;
        case (computerHand > 0.66):
            computerValue = "Scissors";
            console.log("Computer plays: Scissors");
            break;
        default:
            computerValue = "Paper";
            console.log("Computer plays: Paper");
            break;
    }
 return computerValue;   

}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outputContent;
    
    if (playerSelection.includes("rock") && computerSelection.includes("scissors") ||
        playerSelection.includes("paper") && computerSelection.includes("rock") ||
        playerSelection.includes("scissors") && computerSelection.includes("paper")) {
        playerCount++;
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
        computerCount++;
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
    document.getElementById("output").textContent = outputContent;
}

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    playerSelection = button.textContent;
    button.addEventListener("click", playRound(playerSelection, computerSelection));
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