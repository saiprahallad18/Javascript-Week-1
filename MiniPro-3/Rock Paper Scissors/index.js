const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("result");
const userScoreSpan = document.getElementById("userScore");
const computerScoreSpan = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    // Loop through all 3 buttons.
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        // To Reads custom attribute from HTML
        playGame(userChoice);
    });
});

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    if (result === "win") {
        userScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    updateUI(userChoice, computerChoice, result);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) {
        return "draw";
    }

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "win";
    }

    return "lose";
}

function updateUI(user, computer, result) {
    resultText.textContent =
        `You chose ${user}, Computer chose ${computer}. Result: ${result}`;

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}
