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
    if (playerSelection.includes("rock") && computerSelection.includes("scissors")) {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection.includes("rock") && computerSelection.includes("paper")) {
        return "You Lose! Paper beats Rock";
    }
    else {
        return "You Draw! Both drew Rock";
    }
}


const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));