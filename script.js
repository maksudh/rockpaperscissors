console.log("This is a test");

let getComputerChoice = () => {
    let choices = ["rock","paper","scissors"];
    let randomiser = Math.floor(Math.random()*3);
    return choices[randomiser];
}

let playTheGame = (playerSelection, computerSelection) => {
    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock"){
                return ("You draw! " + computerSelection + " is equal to " + playerSelection);
            }
            else if (computerSelection === "paper"){
                return ("You lose! " + computerSelection + " is stronger than " + playerSelection);
            }
            else return ("You win! " + computerSelection + " is weaker than " + playerSelection);
        
        case "paper":
            if (computerSelection === "paper"){
                return ("You draw! " + computerSelection + " is equal to " + playerSelection);
            }
            else if (computerSelection === "scissors"){
                return ("You lose! " + computerSelection + " is stronger than " + playerSelection);
            }
            else return ("You win! " + computerSelection + " is weaker than " + playerSelection);  
        
        case "scissors":
            if (computerSelection === "scissors"){
                return ("You draw! " + computerSelection + " is equal to " + playerSelection);
            }
            else if (computerSelection === "rock"){
                return ("You lose! " + computerSelection + " is stronger than " + playerSelection);
            }
            else return ("You win! " + computerSelection + " is weaker than " + playerSelection);
    }
}

let playerSelection = prompt("What is your selection? Rock, Paper, or scissors? ").toLowerCase();
let computerSelection = getComputerChoice();

console.log(playTheGame(playerSelection, computerSelection));