let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let index = Math.floor(Math.random () * 3);

    if (index == 0){
        return "Rock";
    } else if (index == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

function getHumanChoice (){

    let choice = prompt ("Write your election: 1) Rock, 2) Paper or 3) Scissors").toLowerCase();

    if (choice === "rock"){
        return "Rock";
    } else if (choice === "paper"){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playGame () {

    function playRound(humanSelection, computerSelection) {

        if ((computerSelection == "Rock" && humanSelection == "Scissors") || (computerSelection == "Paper" && humanSelection == "Rock") || (computerSelection == "Scissors" && humanSelection == "Paper")){
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
            computerScore ++;
        } else if (computerSelection === humanSelection){
            console.log("The result of the round is equality");
        } else {
            console.log(`You win! ${humanSelection} beats ${computerSelection}`);
            humanScore ++;
        }
        console.log ("The current score is:");
        console.log (`Computer: ${computerScore}`);
        console.log (`Human: ${humanScore}`);
        console.log ("--------------------------");
    }

    for (i = 1; i < 6; i++){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);
    }

    if (computerScore > humanScore){
        alert ("The winner is Computer");
    } else if (computerScore < humanScore){
        alert ("The winner is Human");
    } else {
        alert ("The result of the game is equality");
    }
}

playGame ()