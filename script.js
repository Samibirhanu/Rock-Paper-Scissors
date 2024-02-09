// get computer choice
function getComputerChoice(){
    // this will give us random number 0 to 2
    const random = Math.floor(Math.random() * 3);
    // create variable for rock paper scissor
  
    const rock = "rock";
    const paper = "Paper";
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

function playerSelection(){
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
function singleRoundPlay(userSelection, computerSelection){
    // asign the parameters to computer choise and player selection function 
    userSelection = playerSelection();
    computerSelection = getComputerChoice();
    // check the parametrs 
    console.log(`computer is ${computerSelection} | you are ${userSelection}`);
    // create if statment to compare the gameplay
    if(((userSelection == "paper" && computerSelection == "rock") || (userSelection == "scissor" && computerSelection == "paper" ) || (userSelection == "rock" && computerSelection == "scissor"))){
        console.log("user wins!");
    } else if ((userSelection == "rock" && computerSelection == "paper") || (userSelection == "paper" && computerSelection == "scissor" ) || (userSelection == "scissor" && computerSelection == "rock")){
        console.log("Computer wins! ");
    } else 
        console.log("its a tie");
    
}
singleRoundPlay();


