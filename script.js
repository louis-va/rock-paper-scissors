'use strict';

function game() {
    let turn = 0;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;

    const buttons = document.querySelectorAll('#game-btn');
    const displayTurn = document.querySelector('#turn');
    const displayPlayerScore = document.querySelector('#player-score');
    const displayComputerScore = document.querySelector('#computer-score');
    const displayFeedback = document.querySelector('#feedback');

    function computerPlay() {
        let moveArray = ["rock", "paper", "scissors"];
        let move = moveArray[Math.floor(Math.random() * moveArray.length)];
        return move;
    }

    function playRound(buttonClicked) {
        playerSelection = buttonClicked.getAttribute('data-value');
        computerSelection = computerPlay();

        if ((computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")) {
            computerScore++;
            displayComputerScore.textContent = computerScore;
            displayFeedback.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            displayFeedback.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection == playerSelection) {
            displayFeedback.textContent = `It's a tie! You both picked ${computerSelection}.`;
        } else {
            return "error";
        }
    }

    function updateTurn() {
        turn++;
        displayTurn.textContent = turn;
        if (turn == 5) endGame();
    }

    function endGame() {
        buttons.forEach((button) => {
            button.disabled = true;
        });

        if (playerScore > computerScore) {
            displayFeedback.textContent = "The game is over. You won!"
        } else if (playerScore < computerScore) {
            displayFeedback.textContent = "The game is over. You lost!"
        } else {
            displayFeedback.textContent = "The game is over. It's a tie!"
        }
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button);
            updateTurn();
        });
    });
}

game();