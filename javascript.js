function getComputerChoice() {
    let diceRoll = Math.random();
    console.log(diceRoll)
    let computerChoice;
    if (diceRoll < 0.33) {
        computerChoice = 'rock'
    } else if (diceRoll < 0.66) {
        computerChoice = 'paper'
    } else if (diceRoll < 1) {
        computerChoice = 'scissors'
    };
    return computerChoice;
}

console.log(getComputerChoice());

function oneRoundGame(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'rock') {
            result = 'Tied!';
        } else if (computerSelection.toLowerCase() == 'paper') {
            result = 'Lost!';
        } else if (computerSelection.toLowerCase() == 'scissors') {
            result = 'Won!';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            result = 'Won!';
        } else if (computerSelection.toLowerCase() == 'paper') {
            result = 'Tied!';
        } else if (computerSelection.toLowerCase() === 'scissors') {
            result = 'Lost!';
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            result = 'Lost!';
        } else if (computerSelection.toLowerCase() === 'paper') {
            result = 'Won!';
        } else if (computerSelection.toLowerCase() == 'scissors') {
            result = 'Tied!';
        }
    }
    return result;
}

console.log(oneRoundGame('ScIsSOrS', 'rOCk'));

