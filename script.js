// get computer choice
function getComputerChoice(){
    // this will give us random number 0 to 100
    const random = Math.floor(Math.random() * 3);
    // create variable for rock paper scissor
    console.log(random);
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
console.log(getComputerChoice());



