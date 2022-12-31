let cScore = 0;
let playScore = 0;

function aiScore(score) {
  let result = 0;
  result += score;
  return result;
}

function playerScore(score) {
  let result = 0;
  result += score;
  return result;
}

function getaiChoice() {  //This Function gets a random choice of the AI
  let choices = Array("rock", "paper", "scissors");
  let aiChoice = choices[Math.floor(Math.random() * choices.length)];
  return aiChoice;
}

function play(playerSelection, aiSelection) {
   if (playerSelection == aiSelection) {
    return `You Played: ${playerSelection}| AI played: ${aiSelection}| Draw!`;
   } 
   else if ((playerSelection == "rock" && aiSelection == "paper") ||
            (playerSelection == "paper" && aiSelection == "scissors") ||
            (playerSelection == "scissors" && aiSelection == "rock")){
                   cScore++;
                   aiScore(cScore);
             return `You Played: ${playerSelection} | AI played: ${aiSelection} | You Lose!`;
            }
   else if ((playerSelection == "paper" && aiSelection == "rock") ||
            (playerSelection == "scissors" && aiSelection == "paper") ||
            (playerSelection == "rock" && aiSelection == "scissors")){
                   playScore++;
                   aiScore(playScore);
             return `You Played: ${playerSelection} | AI played: ${aiSelection} | You Win!`;
  } else {
    return "Invalid Input";
  }
}

function game() {
  let res = "";
  let finalScore;

  num = parseInt(prompt("How Many Rounds do you want to Play?"));
  
   for (let i = 0; i < num; i++) {
      playerSelection = prompt("Rock, Paper or Scissors?");
      res += play(playerSelection, getaiChoice()) + "<br/>";
      document.getElementById("test").innerHTML = res;
   }
   
  finalScore = `Player Score: ${playerScore(playScore)} : AI Score: ${aiScore(cScore)}`;
  document.getElementById("test1").innerHTML = finalScore;
}
