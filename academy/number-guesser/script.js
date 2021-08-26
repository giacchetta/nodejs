let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (human, computer, target) => {
  const diffComputerTarget = Math.abs(target - computer);
  const diffHumanTarget = Math.abs(target - human);
  if (diffComputerTarget === diffHumanTarget ){
    return true;
  } else if (diffComputerTarget < diffHumanTarget ){
    return false;
  } else {
    return true;
  }
};

const updateScore = winner => {
  if (winner = 'human'){
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
