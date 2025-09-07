let score = {
  wins: 0,
  loses: 0,
  ties: 0
};

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';
  
  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  
}