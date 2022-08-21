// Testing getComputerChoice()
// console.log(getComputerChoice())

// Testing getPlayerChocie()
// console.log(getPlayerChoice())
game()

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let outcomeMessage = "";
        let outcome = playRound(playerChoice, computerChoice);

        if (outcome === "win") {
            playerScore++;
        } else if (outcome === "lose") {
            computerScore++;
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
        console.log(`The current score is player: ${playerScore}, computer: ${computerScore}`)
    }

    console.log("That's game!")
    
    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (playerScore < computerScore) {
        console.log("You lost the game...")
    } else {
        console.log("It's a tie!")
    }
}

function playRound(playerChoice, computerChoice) {
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
            // should technically chuck error message somewhere around here
            outcome = "tie";
        }
    }

    return outcome;
}

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