// Testing getComputerChoice()
// console.log(getComputerChoice())

// Testing getPlayerChocie()
// console.log(getPlayerChoice())

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
let outcomeMessage = "";
let outcome;

if (playerChoice === "Scissors") {
    if (computerChoice === "Scissors") {
        outcome = "tie";
    } else if (computerChoice === "Paper") {
        outcome = "win";
    } else {
        outcome = "lose";
    }
} else if (playerChoice === "Paper") {
    if (computerChoice === "Scissors") {
        outcome = "lose";
    } else if (computerChoice === "Paper") {
        outcome = "tie";
    } else {
        outcome = "win";
    }
} else {
    if (computerChoice === "Scissors") {
        outcome = "win";
    } else if (computerChoice === "Paper") {
        outcome = "lose";
    } else {
        outcome = "tie";
    }
}

switch (outcome) {
    case "win":
        outcomeMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
        break;
    case "lose":
        outcomeMessage = `You lose! ${computerChoice} beats ${playerChoice}`;
        break;
    case "tie":
        outcomeMessage = `It's a tie! You both chose ${playerChoice}.`;
        break;
    default:
        outcomeMessage = "Invalid game.";
}

console.log(outcomeMessage);

function getPlayerChoice() {
    while (true) {
        let choice = prompt("Choose: scissors, paper, or rock");
        choice = choice.toLowerCase();
    
        if (choice === "scissors") {
            return "Scissors";
        }
    
        if (choice === "paper") {
            return "Paper";
        }
    
        if (choice === "rock") {
            return "Rock";
        }

        alert("Please type in 'Scissors', 'Paper', or 'Rock'");
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "Scissors";
    }

    if (randomNumber === 1) {
        return "Paper";
    }

    return "Rock";
}