
//random number 0,1,2
// ROCK = 0
// PAPER = 1
// SCISSORS = 2

const options = document.querySelectorAll(".option");
const round = document.querySelector("#round");
const winner = document.querySelector("#winner");
const userScoreDiv = document.querySelector("#user-score");
const computerScoreDiv = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

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

let userChoice = 0;
options.forEach(button => {
    button.addEventListener("click", (e) => {
    optionsArray = Array.from(options);
    userChoice = optionsArray.indexOf(e.target);
    playRound(userChoice,getComputerChoice());
    });
});


function playGame()
{
    
    for(let i = 1 ; i <= 5 ; i++)
    {
        alert("Round " + i +
         "\nYour Score: " + humanScore 
        +"\nComputer Score: " + computerScore);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    if(humanScore === computerScore)
    alert("Equality!\n" + "\nYour Score: " + humanScore +"\nComputer Score: " + computerScore);
    if(humanScore < computerScore)
    alert("You lost!\n" + "\nYour Score: " + humanScore +"\nComputer Score: " + computerScore);
    if(humanScore > computerScore)
    alert("You won!\n" + "\nYour Score: " + humanScore +"\nComputer Score: " + computerScore);
 

}

//playGame();