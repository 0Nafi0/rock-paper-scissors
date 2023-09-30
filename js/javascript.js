function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function titleCase(string) {
    const new_string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return new_string;
}

const contents = document.querySelector(".contents");
const scoreboard = document.querySelector(".scoreboard");
const buttons = document.querySelectorAll("button");
const reset = document.createElement("button");
reset.setAttribute("class", "reset");
let playerScore = 0;
let botScore = 0;

function playRound(playerChoice) {
    playerChoice = titleCase(playerChoice);
    const computerChoice = getComputerChoice();
    const roundVerdict = document.createElement("div");
    roundVerdict.setAttribute("class", "round-result");
    roundVerdict.textContent = "You chose " + playerChoice + " while the BOT chose " + computerChoice;
    const score = document.createElement("div");
    if (win_condition[playerChoice] == computerChoice)
    {
        playerScore++;
    }
    else
    {
        if (playerChoice == computerChoice)
        {
            roundVerdict.textContent = roundVerdict.textContent + ". Draw!";
        }
        else
        {
            roundVerdict.textContent = roundVerdict.textContent;
            botScore++;
        }
    }
    score.textContent = "Your Score: " + playerScore + "    " + "BOT Score: " + botScore;
    scoreboard.appendChild(score);
    scoreboard.removeChild(score.previousSibling);
    contents.appendChild(roundVerdict);
    contents.removeChild(roundVerdict.previousSibling);
    if (playerScore == 5 || botScore == 5)
    {
    const game_over = document.createElement("div");
    game_over.setAttribute("class", "game-over");
    buttons.forEach((button) => {
        button.disabled = true;
    })
    reset.textContent = "Play Again";
    if (playerScore > botScore)
    {
        game_over.textContent = "You've Done it ! Congratulations!";
    }
    else
    {
        game_over.textContent = "Damn You suck so bad";
    }
    contents.appendChild(game_over);
    contents.appendChild(reset);

    }
}

let win_condition = {
    "Paper": "Rock",
    "Rock": "Scissors",
    "Scissors": "Paper",
};


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className);
    })
})

reset.addEventListener("click", () => {
    location.reload();
})