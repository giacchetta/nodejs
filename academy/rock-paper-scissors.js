/*
Learning by practice @ CodeCademy

This is a simple Rock Paper Scissors on JavaScript
*/


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){ return userInput;
    } else {
      console.log('Please, use paper, rock or scissors');
    }
  };
  
  const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
      return 'paper';
    } else if (choice === 1){
      return 'rock';
    } else if (choice === 2){
      return 'scissors';
    } else {
      return 'Something goes wrong!';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return console.log('Game tie');
    } else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
          return console.log('Computer Won!');
        } else {
          return console.log('User Won!');
          }
      } else if (userChoice === 'paper'){
          if (computerChoice === 'scissors'){
            return console.log('Computer Won!');
          } else if ( computerChoice === 'rock'){
            return console.log('User Won!');
          }
      } else if (userChoice === 'scissors'){
          if (computerChoice === 'rock'){
            return console.log('Computer Won!');
          } else if ( computerChoice === 'paper'){
            return console.log('User Won!');
          }
      }
  }
  
  console.log(determineWinner(getUserChoice('paper'), getComputerChoice()));
  