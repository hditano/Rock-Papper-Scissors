
// Variables

const submitBtn = document.querySelector(".submit-name");
const textName = document.querySelector(".text-name");
const playerName = document.querySelector(".player-name");
const nameContainer = document.querySelector(".name-container");
const startRoundBtn = document.querySelector(".start-game");
const resetBtn = document.querySelector('.reset-game');
const gameButtons = document.querySelector('.play-btn');
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const playerCounter = document.querySelector(".player-counter");
const computerCounter = document.querySelector(".computer-counter");
const logs = document.querySelector(".logs");
let userScore = 0;
let computerScore = 0;


//Event Listeners for every button

submitBtn.addEventListener("click", () => {
  if (textName !== "") {
    changeText(textName, playerName);
    nameContainer.style.visibility = "hidden";
    resetBtn.style.visibility = 'visible';
    gameButtons.style.visibility = 'visible';
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

resetBtn.addEventListener("click", resetGame);


// Universal function to changeText
function changeText(origin, destination) {
  return (destination.textContent = origin.value);
}

// Checks Winner.
function checkWinner (user) {
  if(user === 'player' && userScore >= 5) {
    logs.textContent = "You Won!!";
    gameButtons.style.visibility = 'hidden';
  } else if (user === 'computer' && computerScore >= 5) {
    logs.textContent = "Computer Won!!";
    gameButtons.style.visibility = 'hidden';
  }
}

// Resets Game to initial state
function resetGame() {
  nameContainer.style.visibility = 'visible';
  userScore = 0;
  computerScore = 0;
  computerCounter.textContent = computerScore;
  playerCounter.textContent = userScore;
  logs.textContent = '';
  textName.value = ' ';

}


// Computer random logic for Rock, Paper and Scissors
function playComputer() {
  const rules = ["Rock", "Paper", "Scissors"];
  let result = Math.floor(Math.random() * 3);
  return rules[result];
}

// Checks Player selection and computer Selector to compare them for score points
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
