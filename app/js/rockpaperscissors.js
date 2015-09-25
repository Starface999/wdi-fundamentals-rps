////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
if (playerMove === 'rock' && computerMove === 'scissors') {
    winner = 'player';
    console.log('you are the winner!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);
        winner = 'player';}
else if (playerMove === 'rock' && computerMove === 'paper') {
    winner = 'computer';
    console.log('you lost to the computer!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'rock' && computerMove === 'rock') {
    winner = 'tie';
    console.log('it is a tie!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'paper' && computerMove === 'rock') {
    winner = 'player';
    console.log('you are the winner!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'paper' && computerMove === 'scissors') {
    winner = 'computer';
    console.log('you lost to the computer!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'paper' && computerMove === 'paper') {
    winner = 'tie';
    console.log('it is a tie!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'scissors' && computerMove === 'paper') {
    winner = 'player';
    console.log('you are the winner!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'scissors' && computerMove === 'rock') {
    winner = 'computer';
    console.log('you lost to the computer!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else if (playerMove === 'scissors' && computerMove === 'scissors') {
    winner = 'tie';
    console.log('it is a tie!' + ' player chose ' + playerMove + ', computer chose ' + computerMove);}
else {
    winner = 'error! enter either rock, paper, or scissors'}
return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
while (playerWins < 5 && computerWins < 5) {
    getWinner();
    if winner === player {
        playerWins += 1;
        console.log('player gets a point! scoreboard: player ' + playerWins + ' out of 5 wins; computer ' + computerWins ' out of 5 wins.');
    }
    else if winner === computer {
        computerWins += 1;
        console.log('player gets a point! scoreboard: player ' + playerWins + ' out of 5 wins; computer ' + computerWins ' out of 5 wins.');
    }
    else {
        console.log('no points awarded. scoreboard: player ' + playerWins + ' out of 5 wins; computer ' + computerWins ' out of 5 wins.');
    }
}

}

    return [playerWins, computerWins];
}
