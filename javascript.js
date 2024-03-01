function getComputerChoice() {
    let diceRoll = Math.random();
    console.log(diceRoll)
    let computerChoice;
    if (diceRoll < 0.33) {
        computerChoice = 'Rock'
    } else if (diceRoll < 0.66) {
        computerChoice = 'Paper'
    } else if (diceRoll < 1) {
        computerChoice = 'Scissors'
    };
    return computerChoice;
}

console.log(getComputerChoice());
