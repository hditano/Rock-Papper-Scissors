let userName = "";
let chooseRule = "";
let rounds = 1;
// username = prompt("What's your Name?");

while (rounds <= 5) {
  chooseRule = prompt("Type []Rock []Paper or []Scissors");

  console.log(`Game Round ${rounds}`);

  function playRound(chooseRule, computerSelection) {
    if (
      (chooseRule === "Rock" && computerSelection === "Rock") ||
      (chooseRule === "Scissors" && computerSelection === "Scissors") ||
      (chooseRule === "Paper" && computerSelection === "Paper")
    ) {
      return console.log(chooseRule, computerSelection, "You are Tied!!");
    } else if (
      (chooseRule === "Rock" && computerSelection === "Scissors") ||
      (chooseRule === "Scissors" && computerSelection === "Paper") ||
      (chooseRule === "Paper" && computerSelection === "Rock")
    ) {
      return console.log(chooseRule, computerSelection, "You Won!!");
    } else {
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
