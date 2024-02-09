// get computer choice
function getComputerChoice(){
    // this will give us random number 0 to 2
    const random = Math.floor(Math.random() * 3);
    // create variable for rock paper scissor
  
    const rock = "rock";
    const paper = "paper";
    const scissor = "scissor";
    // return rock if 0, paper 1, scissor 2 with if statment
    if (random == 0){
        return rock;
    } 
    else if(random == 1){
        return paper;
    }
    else
        return scissor;

}


// Get player selection

function GetUserChoice(){
    // input from user with prompt function and make it lowercase
    const userInput = prompt("Enter Your choice").toLowerCase();
    // only take rock paper scissor unless alert message
    if (userInput == "rock" || userInput == "paper" || userInput == "scissor"){
        return userInput;
    } else
        return console.log("The user input can be only rock paper and scissor !!");
}

// single round play of computer and user 
//create a function that plays single round that taks two parameters
function playRound(playerSelection, computerSelection){
    // create if statment to compare the gameplay
    console.log(`computer is ${computerSelection} | you are ${playerSelection}`)
    if(((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper" ) || (playerSelection == "rock" && computerSelection == "scissor"))){
        console.log("user wins!");
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissor" ) || (playerSelection == "scissor" && computerSelection == "rock")){
        console.log("Computer wins! ");
    }else if(playerSelection === computerSelection){
        console.log("its a tie");
    } 
    
}
// create variables and assign computer and user selection return values
const playerSelection = GetUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));


