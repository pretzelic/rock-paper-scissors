let modeButton = document.getElementById("night-mode");
let machine = document.getElementById("machine");
let human = document.getElementById("man");

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

function playRockPaperScissors(a) {
    let humanChoice = a;
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
    showWinner(result);
}

function showWinner(a) {
    let result = a;
    if (result === "Human wins") {
        machine.setAttribute("src", "");
        human.setAttribute("src", "images/human.png");
        human.style.marginLeft = "40%";
        message.textContent = "Human wins!"
    }else if (result === "Bot wins") {
        human.setAttribute("src", "");
        machine.setAttribute("src", "images/machine.png");
        machine.style.marginRight = "40%"
        message.textContent = "Machine wins!"
    } else {
        human.setAttribute("src", "images/human.png");
        human.style.marginLeft = "16%"
        machine.setAttribute("src", "images/machine.png")
        machine.style.marginRight = "16%"
        message.textContent = "Draw!"
    }
}

function changeMode() {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "black"
        for (let i=0; i<3; i++) {
            document.getElementsByClassName("par")[i].style.color = "white";
        }
        document.getElementById("mode").setAttribute("src", "images/day.png");
        currentMode = "night"
    } else {
        document.body.style.backgroundColor = "white"
        for (let i=0; i<3; i++) {
            document.getElementsByClassName("par")[i].style.color = "black";
        }
        document.getElementById("mode").setAttribute("src", "images/night.png");
        currentmode = "day";
    }
}