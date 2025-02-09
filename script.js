

//random number 0,1,2
// ROCK = 0
// PAPER = 1
// SCISSORS = 2
function getComputerChoice()
{
    return Math.floor(Math.random()*3)
}

function checkHumanChoise(choise)
{
    switch(choise){
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
        choise = prompt("ROCK, PAPER OR SCISSORS");
    if(checkHumanChoise(choise.toLowerCase()) == 1){
        break;
    }
    }
    switch(choise.toLowerCase()){
        case "rock": return 0;
        break;

        case "paper" : return 1;
        break;

        case "scissors" : return 2;
        break;
        default: return 99;
    }
}

function playRound(humanChoise,computerChoise)
{

}

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoice());