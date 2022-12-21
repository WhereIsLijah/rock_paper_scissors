 function getComputerChoice() //Function to get random choice of AI
 {
    let choices = Array('Rock', 'Paper', 'Scissors');
    var compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice;
 }

 
 function play(playerSelection, computerSelection) // Function 
 { 

      if ((playerSelection == "Rock") && (computerSelection == "Rock"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | Draw! Try Again!`;
         }
      else if ((playerSelection == "Scissors") && (computerSelection == "Scissors"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | Draw! Try Again!`;
         }
      else if ((playerSelection == "Paper") && (computerSelection == "Paper"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | Draw! Try Again!`;
         }
      else if ((playerSelection == "Rock") && (computerSelection == "Paper"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | You Lose! Paper Beats Rock`;
         }
      else if ((playerSelection == "Paper") && (computerSelection == "Scissors"))
         {
            return `Player: ${playerSelection}| AI: ${computerSelection} | You Lose! Scissors Beats Paper`;
         }
      else if ((playerSelection == "Scissors") && (computerSelection == "Rock"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | You Lose! Rock Beats Scissors`;
         }
      else if ((playerSelection == "Paper") && (computerSelection == "Rock"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | You Win! Paper Beats Rock`;
         }
      else if ((playerSelection == "Scissors") && (computerSelection == "Paper"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | You Win! Scissors Beats Paper`;
         }
      else if ((playerSelection == "Rock") && (computerSelection == "Scissors"))
         {
            return `Player: ${playerSelection} | AI: ${computerSelection} | You Win! Rock Beats Scissors`;
         }
      else {
            return "Invalid Input";
         }
   }

 function game()
 {
      //num = parseInt(prompt("How Many Rounds do you want to Play?"));
      //let playerScore = 0;
      let score="";

      for(let i = 0; i < 3; i++)
      {
         playerSelection = prompt("Rock, Paper or Scissors?");
         score += play(playerSelection, getComputerChoice()) + "<br/>";
         document.getElementById("test").innerHTML = score;
      } // Add scores and make user enter amount of rounds
      
 }

 