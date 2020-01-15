var psychicArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var userGuess = "";
var compGuess = "";
var wins = 0;
var losses = 0;
var remainingGuesses = 8;


//User types a letter, then this happens
document.onkeyup = function(event) {
  var userGuess = event.key;

  var computerGuess = psychicArray[Math.floor(Math.random() * psychicArray.length)];

  if ((userGuess === compGuess[i]) {


//Computer guesses a letter and it prints to the HTML 
    alert("User guess: " + userGuess);
    alert("Computer guess: " + computerGuess);
  }
}

//This is what happens when the user guesses counts down and reduces the number of remaining guesses


if (psychicArray.indexOf(userGuess) === compGuess) {
  alert("Try Again!");
}
  

//this is heather's code down below...use sparingly:
  
  
  
  
  

// //var psychicLetter should not appear on final project - shows computer's guess
// var psychicLetter = document.getElementById("psychicLetter");
// var userGuessSoFar = [];


// var userGuessSoFarDisplay = document.getElementById(
//   userGuessSoFar[userGuessSoFar]
// );
// var displayGuessLeft = document.getElementById("totalGuesses");
// var displayWins = document.getElementById("wins");
// var displayLoses = document.getElementById("loses");

// //This funciton selects a random letter from my Psychic array
// function getPsychicLetter() {
//   var random = Math.floor(Math.random() * (psychicGuess.length - 1));
//   //Pics random index value from psychicGuess array
//   //Writes chosen value to HTML
//   psychicLetter.textContent = psychicGuess[random];

//   console.log("Computer's Choice: " + psychicGuess[random]);
//   return psychicGuess[random];
// }

// compGuess = getPsychicLetter();

// document.onkeyup = function(event) {
//   // Determines which key was pressed.
//   userGuess = event.key;
//   userGuessSoFar.push(userGuess);
//   userGuessSoFar.textContent = 

//   for (i = 0; i < psychicArray.length; i++) {
//     if (userGuess === compGuess[i]) {
//       console.log(compGuess[i]);
//       alert("Nailed it");
//       //+1 wins
//       wins ++;
      
//       //reset the guess array
//     } else {
//       console.log(userGuess);
//       console.log(userGuessSoFar);
//       //remove one guess
//       remainingGuesses --;
      
//     }
//   }
// };
