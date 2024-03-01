function getComputerChoice() {
    let diceRoll = Math.random();
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

function oneRoundGame(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() == 'rock') {
        if (computerSelection.toLowerCase() == 'rock') {
            result = 'Game Tied! Computer also chose Rock!';
        } else if (computerSelection.toLowerCase() == 'paper') {
            result = 'You Lose! Computer chose Paper, and Paper covers Rock!';
        } else if (computerSelection.toLowerCase() == 'scissors') {
            result = 'You Win! Computer chose Scissors, and Rock breaks Scissors!';
        }
    } else if (playerSelection.toLowerCase() == 'paper') {
        if (computerSelection.toLowerCase() == 'rock') {
            result = 'You Win! Computer chose Rock, and Paper covers Rock!';
        } else if (computerSelection.toLowerCase() == 'paper') {
            result = 'Game Tied! Computer also chose Paper!';
        } else if (computerSelection.toLowerCase() == 'scissors') {
            result = 'You Lose! Computer chose Scissors, and Scissors cuts Paper!';
        }
    } else if (playerSelection.toLowerCase() == 'scissors') {
        if (computerSelection.toLowerCase() == 'rock') {
            result = 'You Lose! Computer chose Rock, and Rock breaks Scissors!';
        } else if (computerSelection.toLowerCase() == 'paper') {
            result = 'You Win! Computer chose Paper, and Scissors cuts Paper!';
        } else if (computerSelection.toLowerCase() == 'scissors') {
            result = 'Tied! Computer also chose Scissors!';
        }
    }
    return result;
}

function playGame() {
    let rounds = parseInt(prompt('How many rounds of Rock Paper Scissors would you like to play?', ''));
    for (let i = 0; i<rounds; i++) {
    let playerSelection = prompt('What is your choice? Rock, Paper, or Scissors?', '');
    let computerSelection = getComputerChoice();
    result = oneRoundGame(playerSelection, computerSelection);
    alert(result);
    console.log(result);
    }
}

playGame();
