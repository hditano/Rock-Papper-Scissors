let userName = "";
let chooseRule = "";
let rounds = 1;
let userScore = 0;
let computerScore = 0;
// username = prompt("What's your Name?");

while (userScore <= 5 && computerScore <= 5) {
  chooseRule = prompt("Type []Rock []Paper or []Scissors");

  console.log(`Game Round ${rounds}`);
  console.log(`User Score: ${userScore} Computer Score: ${computerScore}`)
  function playRound(chooseRule, computerSelection) {
    if (
      (chooseRule === "Rock" && computerSelection === "Rock") ||
      (chooseRule === "Scissors" && computerSelection === "Scissors") ||
      (chooseRule === "Paper" && computerSelection === "Paper")
    ) {
      userScore++;
      computerScore++;
      return console.log(chooseRule, computerSelection, "You are Tied!!");
    } else if (
      (chooseRule === "Rock" && computerSelection === "Scissors") ||
      (chooseRule === "Scissors" && computerSelection === "Paper") ||
      (chooseRule === "Paper" && computerSelection === "Rock")
    ) {
      userScore++;
      return console.log(chooseRule, computerSelection, "You Won!!");
    } else {
      computerScore++;
      return console.log(chooseRule, computerSelection, "You Lost!!");
    }
  }
  const computerSelection = playComputer();

  function playComputer() {
    const rules = ["Rock", "Paper", "Scissors"];
    let result = Math.floor(Math.random() * 4);
    return rules[result];
  }

  playRound(chooseRule, computerSelection);
  rounds++;
}
