// Testing getComputerChoice()
// console.log(getComputerChoice())

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