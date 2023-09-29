function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function titleCase(string) {
    const new_string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return new_string;
}

const body = document.querySelector("body");
const scoreboard = document.querySelector(".scoreboard");
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
    body.appendChild(roundVerdict);
    body.removeChild(roundVerdict.previousSibling);
}

let win_condition = {
    "Paper": "Rock",
    "Rock": "Scissors",
    "Scissors": "Paper",
};

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className);
    })
})