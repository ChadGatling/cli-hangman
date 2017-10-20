var inquirer = require('inquirer');
var Word = require('./word');

var newWord = new Word();

function guessLetter() {
	console.log("Running guessLetter");	
	inquirer.prompt([{
		name: "letter",
		message: "Guess a letter."
	}]).then(function (answers) {
		newWord.guessLetter(answers);
	}); 
}

function startGame() {
	inquirer.prompt([{
	    type: "confirm",
	    name: "playerReady",
	    message: "Do you want to play a game?"
	}]).then(function(answers) {
	    switch (answers.playerReady) {
	        case true:
	            newWord.getWord(function(word) {
	                newWord.buildChallenge(word);
	            });
	            guessLetter(); // Where do I put guessLetter() to get it to run after the function just above here.
	            break;
	        case false:
	            console.log("OK, byeeee.");
	            break;
	        default:
	            console.log("Neither true nor false???")
	    }
	});
}

startGame();
