function getComputerChoice() {
  let randomInt = Math.ceil(Math.random() * 3);
  switch(randomInt) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    break;
  }
}

function getPlayerMove() {
  let playerMove = window.prompt("Enter: Rock, Paper, or Scissors");
  while(playerMove.toLowerCase() !== "rock" && playerMove.toLowerCase() !== "paper" && playerMove.toLowerCase() !== "scissors") {
    console.log("while loop");
    playerMove = window.prompt("Enter: Rock, Paper, or Scissors");
  }
  return playerMove.toLowerCase();
}

function playRound(playerMove, computerMove) {
  switch(playerMove) {
    case "rock":
      if(computerMove === "rock"){
        console.log("You tied. Computer also picked Rock.");
        break;
      } else if(computerMove === "paper") {
        console.log("You lose. Computer picked paper. Rock loses to Paper.");
        break;
      } else if(computerMove === "scissors") {
        console.log("You win! Computer picked scissors. Rock beats Scissors.");
        break;
      }
    case "paper":
      if(computerMove === "rock"){
        console.log("You win! Computer picked rock. Paper beats Rock.");
        break;
      } else if(computerMove === "paper") {
        console.log("You tied. Computer also picked Paper.");
        break;
      } else if(computerMove === "scissors") {
        console.log("You lose. Computer picked scissors. Paper loses to Scissors.");
        break;
      }
    case "scissors":
      if(computerMove === "rock"){
        console.log("You lose. Computer picked rock. Scissors loses to Rock.");
        break;
      } else if(computerMove === "paper") {
        console.log("You win! Computer picked paper. Scissors beat Paper.");
        break;
      } else if(computerMove === "scissors") {
        console.log("You tied. Computer also picked Scissors.");
        break;
      }
  }
}

function playGame() {
  playRound(getPlayerMove(), getComputerChoice());
}

for(let i = 0; i < 5; i++){
  playGame();
}
console.log("end of script");
