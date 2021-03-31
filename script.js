// let chooseRule = "";
// let rounds = 1;
// let userScore = 0;
// let computerScore = 0;
// let userName = prompt("Please type your name!");

// function playRPS() {
//   while (userScore < 5 && computerScore < 5) {
//     chooseRule = prompt(
//       `Hello ${userName}!! Please type []Rock []Paper or []Scissors`
//     );

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
//   } else if (userScore < 5 && computerScore >= 5) {
//     console.log("Computer Won!");
//   }
// }

// playRPS();

const submitBtn = document.querySelector(".submit-name");
const textName = document.querySelector(".text-name");
const playerName = document.querySelector(".player-name");
const nameContainer = document.querySelector(".name-container");
const startRoundBtn = document.querySelector(".start-game");
const gameButtons = document.querySelector('.play-btn');
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const playerCounter = document.querySelector(".player-counter");
const computerCounter = document.querySelector(".computer-counter");
const logs = document.querySelector(".logs");
let userScore = 0;
let computerScore = 0;

submitBtn.addEventListener("click", () => {
  if (textName !== "") {
    changeText(textName, playerName);
    document.querySelector(".name-container").style.visibility = "hidden";
    gameButtons.style.visibility = 'visible';
    startGame();
  }
});


rockBtn.addEventListener("click", (e) => {
  playRound(e.target.innerText, playComputer());
});

paperBtn.addEventListener("click", (e) => {
  playRound(e.target.innerText, playComputer());
});

scissorsBtn.addEventListener("click", (e) => {
  playRound(e.target.innerText, playComputer());
});

// Universal function to changeText
function changeText(origin, destination) {
  return (destination.textContent = origin.value);
}

function startGame() {
  const startButton = document.createElement("div");
  startButton.setAttribute("class", "main-startGame");
  startButton.innerHTML =
    "<a href='#' class='btn-class reset-game'>Reset Game</a>";
  startButton.style.visibility = "visible";
  startButton.style.textDecoration = "none";
  document.body.appendChild(startButton);
}

function checkWinner (user) {
  if(user === 'player' && userScore >= 5) {
    logs.textContent = "You Won!!";
    gameButtons.style.visibility = 'hidden';
  } else if (user === 'computer' && computerScore >= 5) {
    logs.textContent = "Computer Won!!";
    gameButtons.style.visibility = 'hidden';
  }
}

function startRound() {
  playComputer();
}

function playComputer() {
  const rules = ["Rock", "Paper", "Scissors"];
  let result = Math.floor(Math.random() * 3);
  return rules[result];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Paper")
  ) {
    return (logs.textContent = ` Player: ${playerSelection} *** Computer: ${computerSelection} *** Result = Tie`);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    userScore++;
    playerCounter.textContent = userScore;
    logs.textContent = ` Player: ${playerSelection} *** Computer: ${computerSelection} *** Result = You Won`;
    checkWinner('player');
  } else {
    computerScore++;
    computerCounter.textContent = computerScore;
    logs.textContent = ` Player: ${playerSelection} *** Computer: ${computerSelection} *** Result = You Lost`;
    checkWinner('computer');
  }
}
