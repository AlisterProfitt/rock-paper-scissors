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

let playerScore = 0,
    computerScore = 0

function rockButton(computerSelection) {
    computerSelection = getComputerChoice();
    let result;
    if (computerSelection == 'rock') {
        result = 'Game Tied! Computer also chose Rock!';
    } else if (computerSelection == 'paper') {
        result = 'You Lose! Computer chose Paper, and Paper covers Rock!';
        computerScore++;
    } else if (computerSelection == 'scissors') {
        result = 'You Win! Computer chose Scissors, and Rock breaks Scissors!';
        playerScore++;
    }
    results.textContent = result;
    score.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;
    if (playerScore >= 5) {
        alert('Game Finished! You have won!!!');
        rock.removeEventListener('click', rockButton);
        paper.removeEventListener('click', paperButton);
        scissors.removeEventListener('click', scissorsButton);
    } else if (computerScore >=5) {
        alert('Game Finished! Computer has won!!!')
        rock.removeEventListener('click', rockButton);
        paper.removeEventListener('click', paperButton);
        scissors.removeEventListener('click', scissorsButton);
    }
}

function paperButton(computerSelection) {
    computerSelection = getComputerChoice();
    let result;
    if (computerSelection.toLowerCase() == 'rock') {
        result = 'You Win! Computer chose Rock, and Paper covers Rock!';
        playerScore++;
    } else if (computerSelection.toLowerCase() == 'paper') {
        result = 'Game Tied! Computer also chose Paper!';
    } else if (computerSelection.toLowerCase() == 'scissors') {
        result = 'You Lose! Computer chose Scissors, and Scissors cuts Paper!';
        computerScore++;
    }
    results.textContent = result;
    score.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;

    if (playerScore >= 5) {
        alert('Game Finished! You have won!!!');
        rock.removeEventListener('click', rockButton);
        paper.removeEventListener('click', paperButton);
        scissors.removeEventListener('click', scissorsButton);
    } else if (computerScore >=5) {
        alert('Game Finished! Computer has won!!!')
        rock.removeEventListener('click', rockButton);
        paper.removeEventListener('click', paperButton);
        scissors.removeEventListener('click', scissorsButton);
    }
}

function scissorsButton(computerSelection) {
    computerSelection = getComputerChoice();
    let result;
    if (computerSelection.toLowerCase() == 'rock') {
        result = 'You Lose! Computer chose Rock, and Rock breaks Scissors!';
        computerScore++
    } else if (computerSelection.toLowerCase() == 'paper') {
        result = 'You Win! Computer chose Paper, and Scissors cuts Paper!';
        playerScore++
    } else if (computerSelection.toLowerCase() == 'scissors') {
        result = 'Tied! Computer also chose Scissors!';
    }
    results.textContent = result;
    score.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;

    if (playerScore >= 5) {
        alert('Game Finished! You have won!!!');
        rock.removeEventListener('click', rockButton);
        paper.removeEventListener('click', paperButton);
        scissors.removeEventListener('click', scissorsButton);
    } else if (computerScore >=5) {
        alert('Game Finished! Computer has won!!!')
        rock.removeEventListener('click', rockButton);
        paper.removeEventListener('click', paperButton);
        scissors.removeEventListener('click', scissorsButton);
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#result');
const score = document.querySelector('#score');
score.textContent = `Score: You ${playerScore} - ${computerScore} Computer`

rock.addEventListener('click', rockButton);
paper.addEventListener('click', paperButton);
scissors.addEventListener('click', scissorsButton);