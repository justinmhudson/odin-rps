function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    if (randomInt === 0) {
        return 'rock';
    } else if (randomInt === 1) {
        return 'paper';
    } else if (randomInt === 2) {
        return 'scissors';
    } else {
        return 'ERROR';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Please select rock, paper, or scissors');
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        console.log('Human: Rock');
        if (computerChoice === 'rock') {
            console.log('Computer: Rock');
            console.log('It\'s a tie');
        } else if (computerChoice === 'paper') {
            console.log('Computer: Paper');
            console.log('Paper covers rock. Computer wins!');
            computerScore++;
        } else if (computerChoice === 'scissors') {
            console.log('Computer: Scissors');
            console.log('Rock beats scissors. Human wins!');
            humanScore++;
        }
    } else if (humanChoice === 'paper') {
        console.log('Human: Paper');
        if (computerChoice === 'rock') {
            console.log('Computer: Rock');
            console.log('Paper covers rock. Human wins!');
            humanScore++;
        } else if (computerChoice === 'paper'){
            console.log('Computer: Paper');
            console.log('It\'s a tie');
        } else if (computerChoice === 'scissors') {
            console.log('Computer: Scissors');
            console.log('Scissors beat paper. Computer wins!');
            computerScore++;
        }
    } else if (humanChoice === 'scissors') {
        console.log('Human: Scissors');
        if (computerChoice === 'rock') {
            console.log('Computer: Rock');
            console.log('Rock beats scissors. Computer wins!');
            computerScore++;
        } else if (computerChoice === 'paper') {
            console.log('Computer: Paper');
            console.log('Scissors beat paper. Human wins!');
            humanScore++;
        } else if (computerChoice === 'scissors') {
            console.log('Computer: Scissors');
            console.log('It\'s a tie!');
        }
    }
}

playRound(getHumanChoice(),getComputerChoice());
