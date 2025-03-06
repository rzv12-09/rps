
//random number 0,1,2
// ROCK = 0
// PAPER = 1
// SCISSORS = 2

const options = document.querySelectorAll(".option");
const round = document.querySelector("#round");
const winner = document.querySelector("#winner");
const userScoreDiv = document.querySelector("#user-score");
const computerScoreDiv = document.querySelector("#computer-score");
const scoreBox = document.querySelector(".score-box");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

function getComputerChoice()
{
    return Math.floor(Math.random()*3)
}

function playRound(humanChoice,computerChoice)
{
    switch(humanChoice){
        case 0 : if(computerChoice == 0){ 
                winner.textContent = "Equality! No one wins";
                return;
                }
                if (computerChoice == 1){
                winner.textContent ="You lose! Paper beats rock";
                computerScore++;
                return;
                }
                if(computerChoice == 2){
                winner.textContent = "You win! Rock beats scissors";
                humanScore++;
                return;
                }
        break;
        case 1 : if(computerChoice == 1){ 
            winner.textContent = "Equality! No one wins";
            return;
            }
            if (computerChoice == 0){
            winner.textContent = "You win! Paper beats rock";
            humanScore++;
            return;
            }
            if(computerChoice == 2){
            winner.textContent = "You lose! Scissors beats paper";
            computerScore++;
            return;
            }
        break;
        case 2 : if(computerChoice == 2){ 
            winner.textContent = "Equality! No one wins";
            return;
            }
            if (computerChoice == 1){
            winner.textContent = "You win! Scissors beats paper";
            humanScore++;
            return;
            }
            if(computerChoice == 0){
            winner.textContent = "You lose! Rock beats scissors";
            computerScore++;
            return;
            }
            
    break;
    }
}

function isGameOver() {
    return computerScore === 5 || humanScore === 5;
}

function displayWinner() {
    const gameWinner = document.createElement("div");
    gameWinner.classList.add("game-winner");
    humanScore > computerScore ? gameWinner.textContent = "YOU WON THE GAME!" 
    : gameWinner.textContent = "COMPUTER WON THE GAME!";
    gameWinner.style.color = "red";
    winner.insertAdjacentElement('afterend',gameWinner);
    
}

function askPlayAgain() {
    const askDiv = document.createElement("div");
    const confirmBtn = document.createElement("button");
    askDiv.textContent = "Do you want to play again?";
    scoreBox.appendChild(askDiv);
    confirmBtn.textContent = "YES!";
    askDiv.appendChild(confirmBtn);
    confirmBtn.addEventListener("click", () => {
        resetScore();
        isEventEnabled = true;
    })
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    userScoreDiv.textContent = "Your Score: " + humanScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
    round.textContent = "Round: " + currentRound;
    scoreBox.lastChild.remove();
    winner.textContent = "";
    const rmGameWinner = document.querySelector(".game-winner");
    rmGameWinner.remove();
}

let isEventEnabled = true;

options.forEach(button => {
    button.addEventListener("click", (e) => {
    if(isEventEnabled) {
        optionsArray = Array.from(options);
        userChoice = optionsArray.indexOf(e.target);
        playRound(userChoice,getComputerChoice());
        userScoreDiv.textContent = "Your Score: " + humanScore;
        computerScoreDiv.textContent = "Computer Score: " + computerScore;
        currentRound++;
        round.textContent = "Round: " + currentRound;
        if(isGameOver()) {
            isEventEnabled = false;
            displayWinner();
            askPlayAgain();
        }
    }
    });
});
