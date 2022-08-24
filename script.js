/* do a hash map to make the stuff easier */
/* authenticate input also */

let getComputerChoice = () => {
    let choices = ["rock","paper","scissors"];
    let randomiser = Math.floor(Math.random()*3);
    return choices[randomiser];
}

let playTheGame = (playerSelection, computerSelection) => {
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock"){
                return [0, ("You draw! " + computerSelection + " is equal to " + playerSelection)];
            }
            else if (computerSelection === "paper"){
                return [0, ("You lose! " + computerSelection + " is stronger than " + playerSelection)];
            }
            else return [1, ("You win! " + computerSelection + " is weaker than " + playerSelection)];
        
        case "paper":
            if (computerSelection === "paper"){
                return [0, ("You draw! " + computerSelection + " is equal to " + playerSelection)];
            }
            else if (computerSelection === "scissors"){
                return [0, ("You lose! " + computerSelection + " is stronger than " + playerSelection)];
            }
            else return [1, ("You win! " + computerSelection + " is weaker than " + playerSelection)];  
        
        case "scissors":
            if (computerSelection === "scissors"){
                return [0, ("You draw! " + computerSelection + " is equal to " + playerSelection)];
            }
            else if (computerSelection === "rock"){
                return [0, ("You lose! " + computerSelection + " is stronger than " + playerSelection)];
            }
            else return [1, ("You win! " + computerSelection + " is weaker than " + playerSelection)];
    }
}

let game = () => {
    res = 0
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("What is your selection? Rock, Paper, or scissors? ").toLowerCase();
        let computerSelection = getComputerChoice();
        let gameres = playTheGame(playerSelection, computerSelection);
        console.log(gameres[1])
        if (gameres[0] === 1) {
            res += 1
        }
    }
    if (res >= 3) {
        return ("You won with " + res + " points out of 5!");
    }
    return ("You lost with " + res + " out of 5!");
}

console.log(game());