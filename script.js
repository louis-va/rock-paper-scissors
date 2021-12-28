function computerPlay() {
    let moveArray = ["rock", "paper", "scissors"];
    let move = moveArray[Math.floor(Math.random() * moveArray.length)];
    return move;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
        return "lose";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        return "win";
    } else if (computerSelection == playerSelection) {
        return "tie";
    } else {
        return "error";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let result;

    for (let i = 1; i <= 5; i++){
        console.log(`Round ${i}/5`)

        playerSelection = prompt("Enter rock, paper or scissors : ");
        computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);
        
        if (result == "lose") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        } else if (result == "win") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        } else if (result == "tie") {
            console.log(`It's a tie! You both picked ${computerSelection}.`);
        } else {
            console.log("Wrong input!");
        } 
    }

    let gameResult = (playerScore > computerScore) ? "You won!" : (computerScore > playerScore) ? "You lost!" : "It's a tie!";

    console.log(`${gameResult} Your score : ${playerScore} | Computer score : ${computerScore}`)
}

game();