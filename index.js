function computerPlay() {
    let computerHand = Math.random();
    switch (computerHand) {
        case (computerHand < 0.33):
            console.log("Rock");
            break;
        case (computerHand > 0.66):
            console.log("Scissors");
            break;
        default:
            console.log("Paper");
            console.log(computerHand);
            break;
    }
 return computerHand;   
}

console.log(computerPlay());