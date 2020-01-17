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
      result = "The Computer!";
      document.getElementById("winner").style.color = "red";
      compScore++;
    }
    else if (compChoice.includes('sci')) {
      result = "The Human!"
      document.getElementById("winner").style.color = "green";
      playerScore++;
    }
  }
  else if (playerChoice.includes('pap')) {
    if (compChoice.includes('ock')) {
      result = "The Human!";
      document.getElementById("winner").style.color = "green";
      playerScore++;
    }
    else if (compChoice.includes('sci')) {
      result = "The Computer!";
      document.getElementById("winner").style.color = "red";
      compScore++;
    }
  }
  else if (playerChoice.includes('sci')) {
    if (compChoice.includes('pap')) {
      result = "The Human!";
      document.getElementById("winner").style.color = "green";
      playerScore++;
    }
    else if (compChoice.includes('ock')) {
      result = "The Computer!";
      document.getElementById("winner").style.color = "red";
      compScore++;
    }
  }

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("compScore").innerHTML = compScore;

  document.getElementById("winner").innerHTML = result; //display winner
  document.getElementById("playerChoice").innerHTML = "You chose: "+playerChoice;
  document.getElementById("compChoice").innerHTML = "Computer chose: "+compChoice;

  let gameResult = document.getElementById("gameResult");
  let gameResultSaying = document.getElementById("gameResultSaying");
  let nextGame = document.getElementById("nextGame");
  if (playerScore === 5 || compScore === 5) {
    alert("Game over!");
    if (compScore > playerScore) {
      gameResult.innerHTML = "The Computer!";
      gameResultSaying.innerHTML = "Better luck next time.";
      nextGame.innerHTML = "Make a selection to start a new game.";
    }
    else {
      gameResult.innerHTML = "The Human!";
      gameResultSaying.innerHTML = "Way to go!";
      nextGame.innerHTML = "Make a selection to start a new game.";
    }
    compScore = 0;
    playerScore = 0;
  }
  else {
    gameResult.innerHTML = "";
    nextGame.innerHTML = "";
  }
}

var rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
  playRound('rock');
});

var sci = document.querySelector('#scissors');
sci.addEventListener('click', function() {
  playRound('scissors');
});

var pap = document.querySelector('#paper');
pap.addEventListener('click', function() {
  playRound('paper');
});
