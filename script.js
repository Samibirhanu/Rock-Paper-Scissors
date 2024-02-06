// get computer choice
function getComputerChoice(){
    // this will give us random number 0 to 100
    const random = Math.floor(Math.random() * 100);
    // create variable for rock paper scissor
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "scissor";
    // return rock if 1 - 30, paper  31 - 60, scissor  61 to 90 with if statment
    if (random <= 30){
        return rock;
    } 
    else if(random > 30 && random <= 60){
        return paper;
    }
    else
        return scissor;
        
}



