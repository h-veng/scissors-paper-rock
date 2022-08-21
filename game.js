// Testing getComputerChoice()
// console.log(getComputerChoice())

// Testing getPlayerChocie()
// console.log(getPlayerChoice())

function getPlayerChoice() {
    while (true) {
        choice = prompt("Choose: scissors, paper, or rock")
        choice = choice.toLowerCase()
    
        if (choice === "scissors") {
            return "Scissors"
        }
    
        if (choice === "paper") {
            return "Paper"
        }
    
        if (choice === "rock") {
            return "Rock"
        }

        alert("Please type in 'Scissors', 'Paper', or 'Rock'")
    }
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "Scissors"
    }

    if (randomNumber === 1) {
        return "Paper"
    }

    return "Rock"
}