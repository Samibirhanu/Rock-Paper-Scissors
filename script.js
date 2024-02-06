// get computer choice
function getComputerChoice(){
    // this will give us random number 0 to 2
    const random = Math.floor(Math.random() * 3);
    // create variable for rock paper scissor
  
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "scissor";
    // return rock if 0, paperb 1, scissor 2 with if statment
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
    const input = prompt("Enter Your choice").toLowerCase();
    // only take rock paper scissor unless alert message
    if (input == "rock" || input == "paper" || input == "scissor"){
        return input;
    } else
        console.log("The user input can be only rock paper and scissors !!");
}




