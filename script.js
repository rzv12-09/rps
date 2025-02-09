

//random number 0,1,2
// ROCK = 0
// PAPER = 1
// SCISSORS = 2
function getComputerChoice()
{
    return Math.floor(Math.random()*3)
}

function checkHumanChoice(choice)
{
    switch(choice){
        case "rock": return 1;
        break;

        case "paper" : return 1;
        break;

        case "scissors" : return 1;
        break;

        default:
            alert("Not A Valid Input");
            break;
    }
    return 0;
}

function getHumanChoice()
{
    while(true)
    {
        choice = prompt("ROCK, PAPER OR SCISSORS");
    if(checkHumanChoice(choice.toLowerCase()) == 1){
        break;
    }
    }
    switch(choice.toLowerCase()){
        case "rock": return 0;
        break;

        case "paper" : return 1;
        break;

        case "scissors" : return 2;
        break;
        default: return 99;
    }
}

// ROCK = 0 +
// PAPER = 1
// SCISSORS = 2
function playRound(humanChoice,computerChoice)
{
    switch(humanChoice){
        case 0 : if(computerChoice == 0){ 
                alert("Equality! No one wins");
                return;
                }
                if (computerChoice == 1){
                alert("You lose! Paper beats rock");
                return;
                }
                if(computerChoice == 2){
                alert("You win! Rock beats scissors");
                return;
                }
        break;
        case 1 : if(computerChoice == 1){ 
            alert("Equality! No one wins");
            return;
            }
            if (computerChoice == 0){
            alert("You win! Paper beats rock");
            return;
            }
            if(computerChoice == 2){
            alert("You lose! Scissors beats paper");
            return;
            }
        break;
        case 2 : if(computerChoice == 2){ 
            alert("Equality! No one wins");
            return;
            }
            if (computerChoice == 1){
            alert("You win! Scissors beats paper");
            return;
            }
            if(computerChoice == 0){
            alert("You lose! Rock beats scissors");
            return;
            }
    break;
    }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
console.log(humanChoice);
console.log(computerChoice);

playRound(humanChoice,computerChoice);