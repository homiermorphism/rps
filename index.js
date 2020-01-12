function compHand() {
  var arr = ["rock","paper","scissors"];
  var comp = arr[Math.floor(Math.random()*arr.length)];
  return comp;
}

var playerScore = 0;
var compScore = 0;

function playRound(playerChoice) {
  let result = null;
  var compChoice = compHand();

  if (playerChoice === compChoice) {
    result = "Nobody!"
    document.getElementById("winner").style.color = "#778899";
  }
  else if (playerChoice.includes('ock')) {
    if (compChoice.includes('pap')) {
      result = "The computer!";
      document.getElementById("winner").style.color = "red";
      compScore++;
    }
    else if (compChoice.includes('sci')) {
      result = "The human!"
      document.getElementById("winner").style.color = "green";
      playerScore++;
    }
  }
  else if (playerChoice.includes('pap')) {
    if (compChoice.includes('ock')) {
      result = "The human!";
      document.getElementById("winner").style.color = "green";
      playerScore++;
    }
    else if (compChoice.includes('sci')) {
      result = "The computer!";
      document.getElementById("winner").style.color = "red";
      compScore++;
    }
  }
  else if (playerChoice.includes('sci')) {
    if (compChoice.includes('pap')) {
      result = "The human!";
      document.getElementById("winner").style.color = "green";
      playerScore++;
    }
    else if (compChoice.includes('ock')) {
      result = "The computer!";
      document.getElementById("winner").style.color = "red";
      compScore++;
    }
  }

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("compScore").innerHTML = compScore;

  document.getElementById("winner").innerHTML = result; //display winner
  document.getElementById("playerChoice").innerHTML = "You chose: "+playerChoice;
  document.getElementById("compChoice").innerHTML = "Computer chose: "+compChoice;

  console.log("Computer Score: "+compScore);
  console.log("Player Score: "+playerScore);
  let gameResult = document.getElementById("gameResult");
  let nextGame = document.getElementById("nextGame");
  if (compScore + playerScore === 5) {
    alert("Game over!");
    if (compScore > playerScore) {
      gameResult.innerHTML = "<img src=\"images/comp.png\" width=\"90px\" height=\"90px\">" + "<br>" + "The computer!";
      nextGame.innerHTML = "Click one of the buttons to start a new game.";
      console.log("Computer wins");
    }
    else {
      gameResult.innerHTML = "<img src=\"images/human.png\" width=\"90px\" height=\"90px\">" + "<br>" +"The human!";
      nextGame.innerHTML = "Click one of the buttons to start a new game.";
      console.log("Player wins");
    }
    compScore = 0;
    playerScore = 0;
  }
  else {
    gameResult.innerHTML = "";
    nextGame.innerHTML = "";
  }
}
