let computerValue;

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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection.includes("rock") && computerSelection.includes("scissors") ||
        playerSelection.includes("paper") && computerSelection.includes("rock") ||
        playerSelection.includes("scissors") && computerSelection.includes("paper")) {
        return `You Win! Your ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection.includes("rock") && computerSelection.includes("paper") ||
             playerSelection.includes("paper") && computerSelection.includes("scissors") ||
             playerSelection.includes("scissors") && computerSelection.includes("rock")) {
        return `You Lose! ${playerSelection} beats your ${computerSelection}`;
    }
    else {
        return `You Draw! Both drew ${computerSelection}`;
    }
}

let computerSelection = computerPlay();

let rockPlay = document.getElementById("rock").addEventListener("click", playRound("rock", computerSelection));
let paperPlay = document.getElementById("paper").addEventListener("click", playRound("paper", computerSelection));
let scissorsPlay = document.getElementById("scissors").addEventListener("click", playRound("scissors", computerSelection));

console.log(rockPlay);
console.log(paperPlay);
console.log(scissorsPlay);

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