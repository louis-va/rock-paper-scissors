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
    const displayFeedbackTitle = document.querySelector('#feedback-title');
    const displayFeedbackSubtitle = document.querySelector('#feedback-subtitle');

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
            displayFeedbackTitle.textContent = `You lose!`;
            displayFeedbackSubtitle.textContent = `${computerSelection} beats ${playerSelection}.`;
        } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore++;
            displayPlayerScore.textContent = playerScore;
            displayFeedbackTitle.textContent = `You win!`;
            displayFeedbackSubtitle.textContent = `${playerSelection} beats ${computerSelection}.`;
        } else if (computerSelection == playerSelection) {
            displayFeedbackTitle.textContent = `It's a tie!`;
            displayFeedbackSubtitle.textContent = `You both picked ${computerSelection}.`;
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
            displayFeedbackTitle.textContent = "You won!"
            displayFeedbackSubtitle.textContent = "The game is over."
        } else if (playerScore < computerScore) {
            displayFeedbackTitle.textContent = "You lost!"
            displayFeedbackSubtitle.textContent = "The game is over."
        } else {
            displayFeedbackTitle.textContent = "It's a tie!"
            displayFeedbackSubtitle.textContent = "The game is over."
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
