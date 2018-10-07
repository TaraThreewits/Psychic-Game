//Array that lists out the options for the options (a - z)
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Variables to hold the wins and losses
var wins = 0
var losses = 0
var guessesLeft = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
var currentGuesses = "" //this should be the keys inputted thus far stops at 9

//Variables to hold guesses
var directionsText = document.getElementById("directions-text")
var winText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var guessesLeftText = document.getElementById("guesses-left-text")
var currentGuessesText = document.getElementById("current-guesses-text")

//Function that runs when a user presses a key
document.onkeyup = function (event) {

  var i;
  for (i = 0; i < guessesLeft.length; i++) {

    //Determines which key a user presses
    var userGuess = event.key
    // guessesLeftText = userGuess; //this is to set the Current Guesses
    console.log(userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    if (userGuess === computerGuess) {
      wins++;
      // guessesLeftText.reset(), currentGuessesText.reset() //these are to clear out the form fields upon resetting 
    }

    //if user loses then subtract 1 from the total losses above and lower number of guesses left by 1
    else {
      losses++;
      guessesLeft--;
    }
    console.log()
  }
}


// guessesLeft
// if //function above is false
// then--from guessLeft as long as > 0
// //Logging the results to the table
// currentGuessesText.textContent = "&#x2753Guesses Left: " + userGuess + ","; //do this each round until winning
// guessesLeftText.textContent = 9 - 1
//do this each reset

function newFunction() {
  winText.textContent = "&#x1F3C6Wins: " + wins; //do this each reset
  lossesText.textContent = "&#x1F6ABLosses: " + losses;
}
// && {guessesLeft} and ; userGuess.
//subtract one from guesses left and add userGuess to "current guesses"

//Loop through this as long as guessesLeft < 0