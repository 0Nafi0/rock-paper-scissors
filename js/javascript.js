function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function titleCase(string) {
    new_string = "";
    new_string += string.charAt(0).toUpperCase();
    new_string += string.slice(1).toLowerCase();
    return new_string;
}

function playRound(playerChoice, computerChoice) {
    if (win_condition[playerChoice] == computerChoice)
    return "You win! " + playerChoice + " beats " + computerChoice;
    else {
        if (playerChoice == computerChoice)
        return "Draw! Both players chose " + playerChoice;
        else
        return "You lose! You chose " + playerChoice + " while Computer chose " + computerChoice; 
    }
}


let userChoice = titleCase(prompt("Rock, Paper or Scissors?"));
let computerChoice = getComputerChoice();
let win_condition = {
    "Paper": "Rock",
    "Rock": "Scissors",
    "Scissors": "Paper",
};

console.log(playRound(userChoice, computerChoice));