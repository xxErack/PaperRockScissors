let options = ['paper','rock','scissors']

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice]
}

getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Tie!"
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt('Paper Rock Scissors');
        if (choice == null) {
            continue;
          }
          const choiceInLower = choice.toLowerCase();
          if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
          }
    }
}


function checkWinner(playerSelection,computerSelection){
    if(playerSelection === computerSelection) {
        return "Tie!"
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        return `Player`;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        return `Player`;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        return `Player`;
    }
    else{
        return `Computer`; 
    }
}


function game() {
    console.log("Welcome to Paper Rock Scissors")
    let scorePlayer = 0;
    let scoreComputer = 0;
    for(i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection,computerSelection) == 'Player'){
            scorePlayer++;
        }else if(checkWinner(playerSelection,computerSelection) == 'Computer'){
            scoreComputer++;
        }
    }
    console.log('Game Over!')
    if(scoreComputer > scorePlayer){
        console.log('You Lose The Wholleee  Game!!');
    }else if(scoreComputer < scorePlayer){
        console.log('You Win The Wholeee Gameee!!!');
    }else{
        console.log('We have a tie!!!');
    }
    console.log('-------------------')
}