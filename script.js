// let chooseRule = "";
// let rounds = 1;
// let userScore = 0;
// let computerScore = 0;
// let userName = prompt('Please type your name!');

// function playRPS() {
//   while (userScore < 5 && computerScore < 5) {
//     chooseRule = prompt(`Hello ${userName}!! Please type []Rock []Paper or []Scissors`);

//     console.log(`Game Round ${rounds}`);
//     console.log(`User Score: ${userScore} Computer Score: ${computerScore}`);
//     function playRound(chooseRule, computerSelection) {
//       if (
//         (chooseRule === "Rock" && computerSelection === "Rock") ||
//         (chooseRule === "Scissors" && computerSelection === "Scissors") ||
//         (chooseRule === "Paper" && computerSelection === "Paper")
//       ) {
//         return console.log(chooseRule, computerSelection, "You are Tied!!");
//       } else if (
//         (chooseRule === "Rock" && computerSelection === "Scissors") ||
//         (chooseRule === "Scissors" && computerSelection === "Paper") ||
//         (chooseRule === "Paper" && computerSelection === "Rock")
//       ) {
//         userScore++;
//         return console.log(chooseRule, computerSelection, "You Won!!");
//       } else {
//         computerScore++;
//         return console.log(chooseRule, computerSelection, "You Lost!!");
//       }
//     }
//     const computerSelection = playComputer();

//     function playComputer() {
//       const rules = ["Rock", "Paper", "Scissors"];
//       let result = Math.floor(Math.random() * 3);
//       return rules[result];
//     }

//     playRound(chooseRule, computerSelection);
//     rounds++;
//   }

//   if (userScore >= 5 && computerScore < 5) {
//     console.log(`${userName} Won!`);
//     console.log(`User Score: ${userScore} Computer Score: ${computerScore}`);
//   } else if(userScore < 5 && computerScore >= 5) {
//     console.log("Computer Won!");
//   }
// }

// playRPS();

const submitBtn = document.querySelector(".submit-name");
const textName = document.querySelector(".text-name");
const playerName = document.querySelector(".player-name");

submitBtn.addEventListener('click', (e) => {
  console.log(e);
  if (textName !== "") {
    changeText(textName, playerName);
  }
});

// Universal function to changeText
function changeText(origin, destination) {
  return destination.textContent = origin.value;
}
