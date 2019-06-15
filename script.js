function playerChoice () {
    let playerSelection;
    do {
        playerSelection = (prompt("Please choose your weapon! (rock, paper or scissors)")).toLocaleLowerCase();
    } while (playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors" );
    return playerSelection;
};

function botChoice() {
    let options = ["rock", "paper", "scissors"];
    let selector = Math.floor(Math.random()*3);
    return options[selector];
}

function playRockPaperScissors() {
    let humanChoice = playerChoice();
    let aiChoice = botChoice();
    let result = "draw"
    if (humanChoice === "rock") {
        if (aiChoice === "rock") {
            result = "Draw";
        } else if (aiChoice === "paper") {
            result = "Bot wins";
        } else {
            result = "Human wins"
        }
    }else if(humanChoice === "paper") {
        if (aiChoice === "rock") {
            result = "Human wins"
        } else if (aiChoice === "paper") {
            result = "Draw";
        } else {
            result = "Bot wins"
        }
    }else {
        if(aiChoice === "rock") {
            result = "Bot wins"
        }else if (aiChoice = "paper") {
            result = "Human wins"
        }else {
            result = "Draw"
        }
    }
    console.log(result);
}

function numberOfGames() {
    let number = Number(prompt("How many times would you like to play"));
    for (let i=0; i<=number; i++) {
        playRockPaperScissors();
    }
}

numberOfGames();